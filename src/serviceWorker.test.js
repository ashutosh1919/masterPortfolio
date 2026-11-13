import { unregister } from "./serviceWorker";

const originalServiceWorker = Object.getOwnPropertyDescriptor(
  navigator,
  "serviceWorker",
);
const scope = new URL(import.meta.env.BASE_URL, window.location.origin).href;
const oldScript = new URL("service-worker.js", scope).href;

function setServiceWorker(value) {
  Object.defineProperty(navigator, "serviceWorker", {
    configurable: true,
    value,
  });
}

afterEach(() => {
  if (originalServiceWorker) {
    Object.defineProperty(navigator, "serviceWorker", originalServiceWorker);
  } else {
    delete navigator.serviceWorker;
  }
  vi.restoreAllMocks();
});

describe("old service worker cleanup", () => {
  it("does nothing when service workers or a registration are absent", async () => {
    delete navigator.serviceWorker;
    await expect(unregister()).resolves.toBeUndefined();
    const getRegistration = vi.fn().mockResolvedValue(undefined);
    setServiceWorker({ getRegistration });
    await unregister();
    expect(getRegistration).toHaveBeenCalledWith(scope);
  });

  it.each(["active", "waiting", "installing"])(
    "unregisters the old %s worker",
    async (state) => {
      const registration = {
        scope,
        [state]: { scriptURL: oldScript },
        unregister: vi.fn().mockResolvedValue(true),
      };
      setServiceWorker({
        getRegistration: vi.fn().mockResolvedValue(registration),
      });
      await unregister();
      expect(registration.unregister).toHaveBeenCalledOnce();
    },
  );

  it.each([
    { scope, active: { scriptURL: new URL("other-worker.js", scope).href } },
    { scope: new URL("other/", scope).href, active: { scriptURL: oldScript } },
  ])("leaves an unrelated registration alone", async (details) => {
    const registration = { ...details, unregister: vi.fn() };
    setServiceWorker({
      getRegistration: vi.fn().mockResolvedValue(registration),
    });
    await unregister();
    expect(registration.unregister).not.toHaveBeenCalled();
  });

  it("reports errors without breaking app startup", async () => {
    const error = new Error("blocked");
    const report = vi.spyOn(console, "error").mockImplementation(() => {});
    setServiceWorker({ getRegistration: vi.fn().mockRejectedValue(error) });
    await expect(unregister()).resolves.toBeUndefined();
    expect(report).toHaveBeenCalledWith(
      "Could not unregister the old service worker:",
      error,
    );
  });
});

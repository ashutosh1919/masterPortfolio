// This Vite app does not install a service worker. Remove only the worker
// registered by an older Create React App deployment of this app; an unrelated
// worker on the same origin (or a broader scope) may belong to another site.
export async function unregister() {
  if (!("serviceWorker" in navigator)) return;

  try {
    const scope = new URL(import.meta.env.BASE_URL, window.location.origin);
    const registration = await navigator.serviceWorker.getRegistration(
      scope.href,
    );
    if (!registration || registration.scope !== scope.href) return;

    const oldScript = new URL("service-worker.js", scope).href;
    const workers = [
      registration.active,
      registration.waiting,
      registration.installing,
    ];
    if (workers.some((worker) => worker?.scriptURL === oldScript)) {
      await registration.unregister();
    }
  } catch (error) {
    console.error("Could not unregister the old service worker:", error);
  }
}

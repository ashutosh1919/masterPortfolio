#!/usr/bin/env bash
set -euo pipefail

# Pull requests from forks do not receive repository secrets. Only skip the
# optional integration when neither credential is available; a partial
# configuration should still fail visibly instead of hiding a mistake.
if [[ -z "${DD_API_KEY:-}" && -z "${DD_APP_KEY:-}" ]]; then
  printf 'configured=false\n' >> "$GITHUB_OUTPUT"
  printf '### Datadog Synthetic tests skipped\n\nNo Datadog credentials were available to this run.\n' >> "$GITHUB_STEP_SUMMARY"
  echo '::notice::Datadog Synthetic tests skipped because credentials are unavailable.'
elif [[ -z "${DD_API_KEY:-}" || -z "${DD_APP_KEY:-}" ]]; then
  echo '::error::Configure both DD_API_KEY and DD_APP_KEY, or leave both unset to skip Datadog Synthetic tests.' >&2
  exit 1
else
  printf 'configured=true\n' >> "$GITHUB_OUTPUT"
fi

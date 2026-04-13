# Task: Cleanup and Wake Up CodeForge

## Status: Pending

## Objectives
- [x] **Update Vercel CLI**: Ensure the Vercel CLI is up to date (completed in previous turn).
- [ ] **Wake up CodeForge**: 
  - [ ] Inspect `app/api/codeforge/ai` to ensure AI endpoints are present and functional.
  - [ ] Verify `app/api/codeforge/interactions` is ready.
  - [ ] Ensure the "Omni-Bot" or related services are conceptualized/implemented in the code.
- [ ] **Cleanup Workspace**:
  - [ ] **Critical**: Stop the server running in `c:\Users\James\Desktop\Nebublox`.
  - [ ] Delete `c:\Users\James\Desktop\Nebublox` (the old/mixed version).
  - [ ] Ensure `c:\Users\James\Desktop\Nebublox_Clean` is the primary, clean version.
  - [ ] Start the dev server in the clean version.

## Notes
- The "Wake up" request is interpreted as performing checks on the CodeForge API endpoints to ensure they are not just placeholders.
- The cleanup involves deleting the folder the user is currently running `dev` from, so we must be careful to handle the process termination or warn the user.

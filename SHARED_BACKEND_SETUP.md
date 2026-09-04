# Shared Online Backend Setup

This version is designed so employees and mechanics use the app itself. No email routing is required.

## One-time setup

1. Create a Supabase project.
2. Open the Supabase SQL Editor.
3. Run the entire `supabase-schema.sql` file included with this project.
4. In Supabase, copy:
   - Project URL
   - anon/public API key
5. Open `config.js` and replace the two placeholder values.
6. Upload all files in this ZIP to the root of the GitHub Pages repository.

## What is shared online

- Fleet mechanic names by work location
- Mechanic PIN verification
- Submitted checkout/inspection sheets
- Location routing
- Mechanic inboxes

Example:
Employee submits a Truck Checkout and chooses M3 -> submission is stored online as M3 -> any M3 mechanic can unlock their profile and see it.

## Security design

The browser does not read the mechanic PIN hash. PIN verification occurs in a PostgreSQL function on the backend. The underlying mechanic and submission tables have row-level security enabled and direct table access revoked from the public app key.

## Not connected yet

Photo attachments are not uploaded to Supabase Storage in this version. The checkout data, defect comments, repair notes, and checklist statuses are shared online.

## v28 database update

If you already created the Supabase database from v27, run the entire updated `supabase-schema.sql` file again.
It is written to add the new lead-mechanic and review-signoff fields/functions without deleting existing mechanics or submitted checkout sheets.

### Lead mechanic rules
- Each work location can have only one Lead Mechanic.
- The database enforces that rule.
- All mechanics at the location can open and view submitted checkout sheets after entering their own PIN.
- Only the Lead Mechanic for that same location can press `Sign Off Review`.
- Signed reviews store the reviewing lead mechanic and timestamp.

## v29 database update

If the Supabase project was already created from an earlier version, run the entire updated `supabase-schema.sql` file again.

Mechanic profile settings now support:
- Change PIN from the mechanic's unlocked landing page.
- Delete the mechanic profile.
- Both actions require the currently unlocked mechanic/PIN session.
- Deleting a lead mechanic frees that location so a new lead mechanic can be assigned later.

## v32 District Managers
Run the full updated `supabase-schema.sql` when Supabase is available. It adds the district manager profile table and password functions.

## v33 Admin
Run the full updated supabase-schema.sql. It adds the Admin password singleton and Admin delete RPCs.

## v34 local Admin testing
Before Supabase is configured, Admin password setup, unlock, and reset use browser localStorage so the Admin UI can be tested. After Supabase is configured, the app uses the server-side Admin password RPCs instead.

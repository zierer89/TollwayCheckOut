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

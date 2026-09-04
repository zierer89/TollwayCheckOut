Illinois Tollway Checkout UI v6

Added the full Tractor Checkout under Tractor Checkout.

Included:
- Tractor # / Mower #
- Date, time, inspector and location
- Full tractor/mower inspection list from the paper form
- OK / DEFECT / N/A
- Required defect comments
- Last Serviced is numeric, not a date
- Current Engine Hours
- Repair notes
- Optional Photo Log
- No mechanic/manager review on the operator Tractor form
- Layout fix for long Tractor Exterior text so it does not merge into the status buttons

The existing Truck Checkout also now includes an optional Photo Log.

Mechanic/manager approval can be added later as a separate final approval stage.


v7 Truck Checkout changes:
- Removed Mechanic / Manager Review from the driver's Truck Checkout.
- Safety Sticker Month No. now uses two dropdowns:
  - Month: 1 through 12
  - Year: 26 through 60
- Tractor Checkout remains unchanged.


v8 TMA Checkout:
- Added Trailer and Truck Mounted Attenuator Checkout under TMA Checkout.
- Fields: Name, Location, Date, Attenuator #, Truck # Attenuator Is Attached To.
- Full Frame/Support/Cartridge, Electrical, and Arrow Board checklist.
- Every checklist line MUST have OK, DEFECT, or N/A before submission.
- DEFECT selections require a written comment.
- Added Needed Repairs / Notes and optional Photo Log.
- Manager/Mechanic Review is intentionally excluded from the operator form for future approval workflow.
- All previously approved Truck and Tractor behavior remains unchanged.

v9 Equipment Checkout added:
- Machine, Model, Date, Time, Inspected By, Location
- Hourmeter and Service Due are numeric fields together in the header
- Service Due removed from the checklist
- Fluid Levels, Greasing, Visual Inspection, Start Engine and Check
- Every line requires OK / DEFECT / N/A
- DEFECT requires written explanation
- Repair notes and optional Photo Log
- Mechanic Review excluded for later approval workflow
- Locked Truck, Tractor and TMA forms unchanged

v10 Sweeper Checkout:
- Added Street Sweeper Inspection Sheet under Sweeper Checkout.
- All checklist items require OK / DEFECT / N/A before submission.
- DEFECT requires written explanation.
- Air Cleaner is a normal checklist item for both truck and rear engine.
- Separate required numeric restriction-gauge reading fields for both air cleaners.
- Wash Unit After Using is a required Yes / No selection.
- Truck Condition includes Exterior Clean, Interior Clean, Damage Yes/No.
- Safety Sticker uses Month 1-12 and Year 26-60.
- Last Serviced (Hours), Current Hours and Current Mileage are numeric.
- Includes repair notes and optional Photo Log.
- Mechanic Review excluded for future approval workflow.
- Locked v9 forms unchanged.


v11 Sticky Checkout Header:
- The checkout detail header now stays visible as the operator scrolls down any form.
- The Back button and current checkout-sheet title follow the operator through the form.
- This applies to all checkout sheets without changing their locked content or validation.

v12 Main Settings Menu:
- Added a gear/settings icon at the top right of the main Checkout Sheets page.
- Tapping it opens a menu in this exact order: Settings, About.
- Settings and About each open their own page with a Back button.
- Existing checkout forms and v11 sticky checkout header behavior are unchanged.

v13 Settings/About Headers:
- Settings page now has a dedicated left-facing back arrow to return to the main Checkout Sheets page.
- About page now has a dedicated left-facing back arrow to return to the main Checkout Sheets page.
- Each page has a clear centered header label showing whether the operator is in Settings or About.
- Existing checkout forms and app behavior remain unchanged.

v14 Settings/About Fix:
- Fixed Settings and About pages so they are true top-level app screens instead of being nested inside the hidden checkout-sheet screen.
- Both pages now visibly show a left back arrow and centered page title.
- Back arrow returns directly to the main Checkout Sheets page.
- Existing checkout forms and sticky checkout header remain unchanged.

v15 Settings/About Navigation Fix:
- Removed the separate Settings/About screen implementation that could produce a blank white page.
- Settings and About now reuse the same proven sticky detail header used by checkout sheets.
- Each page shows a left back arrow and its page label at the top.
- The back arrow returns directly to the main Checkout Sheets page.
- Existing checkout forms remain unchanged.

v16 About Credit:
- Added “Mobile app created by Ryan Zierer 2026” to the About section.
- All approved v15 behavior remains unchanged.

v17 Lane Blade Inspection:
- Added the Lane Blade Inspection Sheet using the same approved form format as the existing checkout sheets.
- Header fields are Date, Time, Inspected By, Truck Lane Blade Is Attached To, and Location.
- Added Fluid Levels, Visual Inspection, and Operate Blade and Check sections from the paper form.
- All checklist lines require OK / DEFECT / N/A.
- DEFECT requires a written explanation.
- Includes Needed Repairs / Notes and optional Photo Log.
- Mechanic Review remains excluded for the future approval workflow.
- All v16 approved checkout content and app behavior are preserved.

v18 Fleet Menu:
- Added upper-left hamburger dropdown to the main screen.
- First selection: Fleet Mechanics.
- Second selection: Fleet District Managers.
- Both open labeled pages using the existing sticky header/back-arrow navigation.
- All approved v17 content remains unchanged.

v19 Fleet Mechanics Location Landing:
- Fleet Mechanics now opens to a location-selection landing page.
- Uses the same button/card style as the main Checkout Sheets landing page.
- Location order matches the approved checkout location menu exactly:
  M1, M2, M3, M4, M5, M6, M7, M8, M11, M12, M14, M16, CAG, E02, E06, Sign Shop, Road Electric.
- Each location button opens a placeholder Fleet Mechanics page for that location, ready for the next functions to be added.
- All approved v18 content and behavior are preserved.

v20 Fleet Mechanics Stacked Locations:
- Fleet Mechanics location buttons now remain in one vertical stack on all screen sizes.
- Each location uses the same green selectable button style as the Checkout Sheets main landing page.
- All approved v19 behavior and content are preserved.

v21 Fleet Mechanics Location Cards:
- Corrected the Fleet Mechanics landing page to reuse the exact Checkout Sheets landing-page card classes.
- Each location is displayed as the same large green rounded card with left icon, white text, and right chevron.
- Location cards are stacked vertically in one column on phone, tablet, and desktop.
- Intro now matches the main landing-page style: “Select a location to get started.”
- All approved v20 behavior and prior checkout content are preserved.

v22 Fleet Mechanics Text-Only Location Cards:
- Removed all left-side images/icons from Fleet Mechanics location cards.
- Location cards retain the same large green Checkout Sheets landing-page style and right-side chevron.
- Locations remain stacked vertically in one column.

v23 Fleet Mechanics Large Location Cards:
- Approved Fleet Mechanics location landing design.
- Location buttons use large green Checkout Sheets-style cards.
- No left-side icons.
- No right-side arrows/chevrons.
- Location lettering is centered.
- Cards remain stacked in one column and the page scrolls to reach all locations.

v24 Fleet Mechanic Rosters:
- Tapping any Fleet Mechanics location now opens that location's mechanic roster page.
- The selected work location is shown in the sticky header.
- A + button appears at the upper-right of the roster page.
- Tapping + opens an Add Mechanic field.
- Added mechanics are displayed as large green centered-name cards.
- Mechanic names are stored separately for each location in the device/browser local storage.
- Back from a mechanic roster returns to the Fleet Mechanics location landing page; back from the location landing page returns to the main Checkout Sheets screen.
- Existing checkout sheets and all previously approved behavior remain unchanged.

v25 Mechanic Lock Page:
- Add Mechanic now requires a name plus a personal 4–6 digit PIN and PIN confirmation.
- Tapping a mechanic name opens a dedicated lock page.
- The mechanic's personal landing page cannot be opened until the correct PIN is entered.
- Incorrect PIN keeps the page locked.
- PINs are stored as SHA-256 hashes in local device/browser storage rather than plain text.
- Back from the lock/personal page returns to that location's mechanic roster.

v26 Location-Based Submission Inbox:
- Each implemented checkout/inspection form now routes a submitted sheet to the Fleet Mechanics queue matching the Location selected by the employee.
- After a mechanic unlocks their personal page, they can only view submitted checkout sheets for that mechanic's work location.
- The mechanic personal page is now a submission inbox, not a general-purpose dashboard.
- Tapping a submitted sheet opens its captured form details.
- Current implementation stores submissions in browser/device local storage. This proves the routing and UI flow on one device/browser; cross-device delivery from employee iPads/phones to mechanic iPads requires the planned shared backend/Microsoft 365 integration.

v27 Shared Online Backend:
- Replaced device-only localStorage routing for mechanic rosters and submitted checkout sheets with a shared Supabase backend.
- Employee checkout submissions are saved online and routed by the selected Location.
- Fleet Mechanics rosters are shared across devices.
- A mechanic enters their PIN inside the app; the database verifies it server-side.
- After unlock, the mechanic sees only submitted checkout sheets for that mechanic's work location.
- No email delivery is required.
- PIN hashes remain on the database server and are never returned to the browser.
- Added config.js and supabase-schema.sql.
- Truck Checkout routing was also corrected so it now follows the same online location-routing flow as the other implemented forms.
- Photo file uploads are not yet sent to the online backend; the form data and checklist results are shared now.

v28 Lead Mechanic Review:
- Add Mechanic now includes a Lead Mechanic option.
- One lead mechanic maximum is enforced per work location.
- Lead mechanics are labeled in the location roster.
- Submitted checkout sheets show Pending Review or Reviewed.
- All mechanics can view their location's submitted sheets.
- Only the lead mechanic for that location can sign off a checkout sheet review.
- Review sign-off stores the lead mechanic and review timestamp in the shared backend.

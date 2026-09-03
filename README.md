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

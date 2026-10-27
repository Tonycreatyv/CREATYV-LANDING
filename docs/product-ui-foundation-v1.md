# Creatyv Product UI Foundation v1

Status: design/architecture foundation only. No production deploy implied.

## Product principle

Creatyv should feel like a business operating system, not a chatbot builder.

Customer journey:

`discover Creatyv -> quick onboarding -> connect business/channel -> test -> go live -> operate from one workspace`

Consumer journey:

`message / scan / form / call -> Creatyv understands intent -> action is completed -> follow-up -> outcome`

Core operating model:

`channel -> Core -> organization context -> intent -> safe tool -> vertical action -> follow-up -> outcome`

## UI architecture

### 1. creatyv.io — marketing
Purpose: explain the outcome and move a business owner into onboarding.

Primary sections:
1. Hero: "Turn conversations into customers."
2. Live product story: WhatsApp message -> intent -> action -> follow-up.
3. Outcomes: respond faster, recover missed leads, book more, keep every lead moving.
4. Vertical examples.
5. How it works.
6. Proof/demo/results section.
7. Integrations/channel section.
8. Pricing / plan framing.
9. FAQ.
10. CTA: `Connect my business`.

Visual direction:
- dark premium base;
- restrained luminous accents;
- product UI is the hero, not decorative AI art;
- 3D/Spline only as ambient depth or one interactive focal object;
- no heavy 3D behind text on mobile;
- reduced-motion fallback required.

### 2. app.creatyv.io/onboarding — activation
Goal: shortest possible time-to-value.

Initial flow:
1. Business type.
2. Import/identify business.
3. Choose primary goal.
4. Connect WhatsApp.
5. Test Creatyv.
6. Go live.

Progressive setup after activation:
- services;
- business hours;
- locations;
- calendar;
- team;
- follow-up rules;
- integrations;
- AI knowledge/context.

Rule: do not block activation on optional configuration.

### 3. app.creatyv.io — operating workspace
Universal shell:
- workspace switcher;
- Home;
- Inbox;
- Leads/Contacts;
- Follow-up;
- Activity;
- Analytics;
- Settings.

Vertical capabilities appear conditionally instead of creating unrelated apps.

Mobile:
- compact header;
- bottom navigation for the highest-frequency actions;
- sheets/drawers for create/edit actions;
- full-width task queues;
- no desktop table forced into horizontal scrolling if cards can express the same task.

## Vertical Starter Kits

### Dental / Appointment businesses
Primary outcome: convert conversations to booked appointments and recover missed demand.

Modules:
- Inbox;
- Leads;
- Appointments;
- Calendar;
- Follow-up;
- No-show recovery;
- Services;
- Staff/locations;
- Analytics.

Starter intents:
- book appointment;
- reschedule;
- cancel;
- pricing/service question;
- insurance/payment question;
- human help.

Dashboard home:
- appointments today;
- new leads;
- leads awaiting reply;
- follow-ups due;
- recovered leads;
- conversion funnel.

### Legal / Referral / Immigration
Primary outcome: capture, qualify, route and follow every case.

Modules:
- New;
- Follow-up;
- Approved/Converted;
- Disqualified;
- Assignments;
- Case detail;
- Notes/history;
- Follow-up scheduling;
- Partners;
- Analytics.

This kit should reuse the operational evidence learned from Referral Hub/Martha rather than inventing a separate CRM model.

### Retail / Furniture
Primary outcome: turn product interest into store visits, calls, financing conversations and purchases.

Modules:
- Leads;
- Product interest;
- Conversations;
- Follow-up;
- Visits/appointments;
- Promotions;
- Customer history;
- Analytics.

Starter intents:
- product availability;
- price;
- financing;
- store location;
- appointment/visit;
- human help.

### Home Services
Primary outcome: turn inquiries into qualified estimates/jobs.

Modules:
- Leads;
- Requests/quotes;
- Schedule;
- Follow-up;
- Service area;
- Technicians/team;
- Analytics.

Starter intents:
- quote;
- emergency;
- schedule;
- service-area check;
- status;
- human help.

### Restaurant / Food
Primary outcome: handle orders, reservations and repeat-customer communication.

Modules:
- Orders;
- Reservations;
- Inbox;
- Customers;
- Promotions;
- Follow-up;
- Analytics.

### Real Estate
Primary outcome: qualify prospects and convert them to conversations/showings.

Modules:
- Leads;
- Properties/interests;
- Qualification;
- Appointments/showings;
- Follow-up;
- Pipeline;
- Analytics.

## Capability model

Do not create one separate dashboard codebase per vertical. Enable capabilities per organization.

Common capabilities:
- contacts;
- conversations;
- lead lifecycle;
- follow-up;
- activities;
- analytics;
- integrations.

Vertical capabilities:
- appointments;
- referrals/assignments;
- orders;
- quotes/requests;
- property interests;
- promotions.

A Starter Kit should configure defaults: intents, fields, actions, navigation, automations and dashboard cards.

## Dashboard design system

Use shadcn-compatible primitives as foundation. Use 21st.dev as a source for selected visual patterns, not as the product architecture.

Recommended patterns to evaluate:
- collapsible sidebar shell;
- app dashboard layout;
- stats bento cards;
- funnel chart;
- AI chat/message dock;
- onboarding dialog/stepper;
- mobile bottom nav;
- command/search palette;
- sheets/dialogs;
- pricing cards;
- animated/gradient backgrounds.

Operational UI rule:
- clarity beats spectacle inside the dashboard;
- animation communicates state/change, not decoration;
- dense operational screens should use neutral surfaces and one primary accent;
- premium visual effects belong primarily to marketing/onboarding/empty states.

## Visual direction

Preferred direction: `dark premium + glass/layered restraint`.

Why:
- feels contemporary without looking like a crypto dashboard;
- allows WhatsApp/product previews to stand out;
- works on mobile;
- can share a visual language between landing, onboarding and app.

Use ambient backgrounds:
- subtle shader/gradient field;
- slow Spline object with pointer parallax on desktop;
- static/lightweight fallback on mobile;
- never place critical copy inside the 3D canvas.

Candidate Spline concepts:
1. Orb/network core — communicates routing/orchestration.
2. Floating conversation-to-action nodes — communicates channels becoming actions.
3. Modular cubes/tiles — communicates vertical capabilities assembling into one OS.

Avoid:
- generic humanoid AI robot;
- giant glowing brain;
- busy particles behind forms;
- 3D scenes that materially hurt LCP/battery/mobile scrolling.

## Plans — product framing (draft)

Plans should scale by operational value, not just message count.

### Start
For a single local business starting with one primary workflow.
- one location;
- one primary channel;
- contacts/conversations;
- one Starter Kit;
- basic follow-up;
- basic analytics.

### Grow
For businesses using Creatyv as a real front desk.
- multiple workflows;
- appointments/orders/referrals depending on vertical;
- automation/follow-up;
- team members;
- richer analytics;
- integrations.

### Scale
For multi-location or partner operations.
- multiple locations/workspaces;
- advanced routing;
- roles/permissions;
- custom automations;
- advanced analytics;
- priority support/onboarding.

Do not hard-code final prices until unit costs, support load and willingness-to-pay are measured.

## Freedom/income model for Creatyv

Creatyv should not depend on Jose manually performing every marketing task.

Revenue layers:
1. recurring SaaS/platform fee;
2. onboarding/setup fee where justified;
3. managed acquisition/content as optional service;
4. higher-value integrations/custom automation;
5. multi-location/partner expansion.

Product goal: reduce marginal work per new customer by standardizing vertical Starter Kits and onboarding.

## Build order

Phase 1 — Product UI foundation
- app shell;
- onboarding shell;
- vertical selector;
- goal selector;
- responsive primitives;
- design tokens.

Phase 2 — Core reusable operations
- lead queue;
- detail drawer;
- follow-up actions;
- activity timeline;
- empty/loading/error states.

Phase 3 — first monetizable kit
- Dental/Appointments.

Phase 4 — Legal/Referral adapter
- reuse proven Referral Hub operational model without breaking Legacy.

Phase 5 — Retail/Furniture.

Phase 6 — landing/pricing/demo optimized around the working product.

## Success metrics

Onboarding:
- time to first connected channel;
- time to first successful test;
- onboarding completion;
- activation without human assistance.

Business outcome:
- first-response time;
- leads contacted;
- follow-ups completed;
- appointments/orders/referrals created;
- recovered leads;
- conversion rate.

Creatyv economics:
- setup time per account;
- support time per account;
- gross margin;
- expansion by capabilities/locations;
- churn.

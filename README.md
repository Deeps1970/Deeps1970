# Threat Shield Guard

Build a minimal, modern, responsive web application called "ThoondilGuard".

ThoondilGuard is a free privacy-focused phishing and fraud detection platform.

IMPORTANT PRODUCT PRINCIPLES:
- No login
- No signup
- No authentication
- No pricing
- No subscription
- No user account
- No unnecessary onboarding
- The core analysis flow must be usable immediately without registration.
- Keep the UI minimal, direct and utility-focused.
- Avoid excessive marketing copy, large hero sections, unnecessary animations, gradients, decorative illustrations, and excessive text.

CORE USER FLOW:

Home
→ User pastes a suspicious message or URL
→ Clicks "Analyze Threat"
→ Analysis result is displayed clearly
→ User can understand the risk and recommended action
→ User can optionally report the scam

HOME PAGE:

Header:
- ThoondilGuard logo/name on the left
- Navigation:
  Analyze
  Threat Intelligence
  Report Scam

Hero should be compact, not a large marketing section.

Heading:
"Check before you click."

Subheading:
"Analyze suspicious messages, links and screenshots for phishing and fraud."

Main analysis card:
- Large textarea/input
- Placeholder:
  "Paste a suspicious message or link..."
- Primary button:
  "Analyze Threat"

Below the input:
- "or"
- Upload Screenshot button

Also provide a small option for:
"Analyze URL"

Keep the home page focused on the analysis action.

ANALYSIS RESULT PAGE:

Create a clean security-analysis interface.

Example result:

Risk Score
94 / 100

HIGH RISK

Threat Type:
Phishing

Detected Indicators:
- Brand impersonation
- Suspicious URL
- Urgency manipulation
- Credential request

Section:
"Why is this suspicious?"

Example explanation:
"This message creates urgency and asks you to verify your account through an external URL."

Section:
"Recommended Action"

"Do not click the link or provide credentials. Verify the request through the official website or application."

Buttons:
- Report Scam
- Analyze Another

Use clear visual hierarchy.

For risk states:
LOW RISK
MEDIUM RISK
HIGH RISK
CRITICAL

Do not rely only on color. Always display the text label and score.

SCREENSHOT ANALYZER:

Create a simple upload interface:
- Drag and drop area
- Upload Screenshot button
- Image preview
- Analyze Screenshot button
- Remove image button

After analysis, show the same standardized threat result interface.

URL ANALYZER:

Create a simple URL input:
"Paste a suspicious URL..."

Button:
"Analyze URL"

Result should show:
- Risk score
- Domain
- Threat classification
- Suspicious indicators
- Recommendation

THREAT INTELLIGENCE PAGE:

Create a separate lightweight dashboard for viewing aggregated fraud intelligence.

Show:
- Active scam categories
- Recent reported scams
- Common indicators
- Threat trends

Example categories:
- KYC Scam
- Bank Impersonation
- UPI Fraud
- Delivery Scam
- Job Scam
- Investment Scam
- Refund Scam

Keep this dashboard clean and functional rather than visually complicated.

REPORT SCAM PAGE:

Simple form:
- Scam category
- Suspicious message
- URL (optional)
- Screenshot (optional)
- Submit Report

Categories:
Bank Impersonation
UPI Fraud
KYC Scam
Job Scam
Delivery Scam
Investment Scam
Refund Scam
Other

Do not require login.

GLOBAL UI:

Use a minimal professional cybersecurity aesthetic.

Requirements:
- Responsive desktop and mobile design
- Clean typography
- Strong spacing
- Rounded cards
- Subtle borders
- Minimal shadows
- Accessible contrast
- Clear buttons
- Simple navigation
- No excessive copy
- No fake statistics
- No fake testimonials
- No unnecessary sections

Use realistic sample data only where needed for the prototype.

TECHNICAL STRUCTURE:

Use React with TypeScript.

Create reusable components for:
- Header
- AnalysisInput
- ScreenshotUploader
- RiskScore
- ThreatIndicators
- RecommendationCard
- ReportForm
- ThreatCategoryCard
- RecentReports

For the prototype, use mock analysis data and mock API responses where backend functionality is not yet implemented.

IMPORTANT:
The UI should look like a real security product prototype, not a generic AI landing page.

The primary action on the entire product is:
"Analyze Threat"

Keep the experience extremely simple:
Paste → Analyze → Understand → Act.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
# Canyon Care Co. website

A one-page static website for a local Coal Creek Canyon laundry and home-care service. It works on GitHub Pages without a server or paid website builder.

## Before publishing

1. Confirm that `akrowe20@gmail.com` is the email address you want displayed publicly. It appears in `script.js` and the contact section of `index.html`.
2. Review all prices in `index.html`. Search for `$` to find them quickly.
3. Replace the service-area wording if you do not want to serve Wondervu, Pinecliffe, and nearby Coal Creek Canyon homes.
4. The “Why local matters” section explains that you live in Wondervu. Add your names or personal details there if you are comfortable publishing them.

## Preview on your computer

The easiest option is to double-click `index.html`. For a more accurate local preview, open a terminal in this folder and run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Sign into GitHub and choose **New repository**.
2. Name it `canyon-care-co` (or another lowercase name with hyphens).
3. Set it to **Public**, leave the initialization boxes unchecked, and select **Create repository**.
4. On the new repository page, choose **uploading an existing file**.
5. Upload `index.html`, `styles.css`, `script.js`, and `README.md` from this folder. Do not upload the ZIP itself.
6. Enter a commit message such as `Add Canyon Care Co. website` and select **Commit changes**.
7. Open **Settings → Pages**.
8. Under **Build and deployment**, choose **Deploy from a branch**.
9. Select branch **main**, folder **/(root)**, then **Save**.
10. Wait a few minutes. GitHub will show the live address, usually `https://YOUR-USERNAME.github.io/canyon-care-co/`.

## Update the website later

Open a file in GitHub, select the pencil icon, make the change, and commit it. GitHub Pages will redeploy automatically.

## Contact-form behavior

The form creates a pre-filled email in the visitor's own email app. It does not collect or store data, and it needs no backend. If you later want an embedded form that sends without opening an email app, connect a service such as Formspree and add a short privacy notice.

## Suggested business setup before accepting bookings

- Confirm business registration, sales-tax, and local requirements for your exact setup.
- Ask your insurer about business use of your vehicle, care/custody/control for pets, and access to client homes.
- Use a written service agreement covering access, cancellations, veterinary authorization, emergencies, laundry damage limits, and weather/road constraints.
- For vacation-home checks, clearly state that visits are visual observations—not professional inspections, security monitoring, snow removal, or repair services.
- Keep client keys and access codes labeled without street addresses and store them securely.

## Files

- `index.html` — all wording and page structure
- `styles.css` — layout, colors, and mobile styling
- `script.js` — menu, contact details, and email-request form
- `README.md` — setup and publishing instructions

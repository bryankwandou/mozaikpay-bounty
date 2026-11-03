# MozaikPay — product facts (verified)

Collected 2026-10-31 from the official docs (Spanish) and the store listings. Every line below has a source.
If a fact is not here, do not say it in the video. No numbers for fees, limits, or speeds beyond what is quoted.

Sources:
- [S1] Qué es MozaikPay — https://docs.mozaik.money/es/docs/get-started/what-is-mozaikpay
- [S2] Crea tu cuenta — https://docs.mozaik.money/es/docs/get-started/set-up-your-account
- [S3] Crear un enlace de pago — https://docs.mozaik.money/es/docs/guides/sending-receiving/create-payment-link
- [S4] Países y monedas admitidos — https://docs.mozaik.money/es/docs/reference/supported-countries
- [S5] Deposita dinero en tu billetera — https://docs.mozaik.money/es/docs/get-started/deposit-money-into-your-wallet
- [S6] Envía tu primer pago — https://docs.mozaik.money/es/docs/get-started/send-your-first-payment
- [S7] ¿Por qué verificar tu identidad? — https://docs.mozaik.money/es/docs/how-it-works/why-verify-identity
- [S8] Verifica tu identidad — https://docs.mozaik.money/es/docs/guides/account-security/verify-your-identity
- [S9] ¿Qué son los dólares digitales? — https://docs.mozaik.money/es/docs/how-it-works/what-are-digital-dollars
- [S10] Google Play — https://play.google.com/store/apps/details?id=money.mozaik.MozaikPay
- [S11] App Store (CL) — https://apps.apple.com/cl/app/id6759724794 (via iTunes lookup API)

## What it is
- A payments app with "dólares digitales" that keep their value in US dollars. The app shows only dollars. [S1]
- Under the hood the digital dollars are USDC (issuer: Circle); held on Base. [S1][S9] — *do not say these words in the video; see wording bans.*
- Store name: "MozaikPay: Dólares Digitales". Developer: Sig Zero Inc. Category: Finance. iOS v1.4.7 (updated 2026-10-29), first released 2026-09-07; no App Store ratings yet; Google Play shows 50+ downloads. Support: support@sig0.io. [S10][S11]
- Listing disclaimer: MozaikPay/Sig Zero is not a bank, custodian, exchange, broker, money transmitter, payment processor or card issuer; balances are not deposits and are not insured (FDIC/SIPC). On/off-ramp is provided by external partners under their own terms. [S10]

## Self-custody (safe wording)
- "Billetera autocustodial": only the user controls their funds; MozaikPay does not keep the money or the keys. [S1][S10]
- Protected by a 6-digit PIN, optional face/fingerprint unlock. [S2]
- Recovery key backup: iCloud / Google Drive, email, or manual file; encrypted with a recovery password that MozaikPay does not store — if forgotten, the backup cannot restore the wallet. [S2]
- Safe on-screen phrasing: **"Solo yo controlo mi plata. La app no la guarda."** (matches [S1]).

## Account setup (owner must do this personally)
1. Install from App Store / Google Play → "Comenzar". [S2]
2. Sign up with Google, Apple, or email (verification code, screen "Revisa tu bandeja de entrada"). [S2]
3. Choose a username (changeable later); accept Privacy Policy and Terms. [S2]
4. Create a 6-digit PIN (twice); optional biometrics. [S2]
5. Back up the recovery key + create recovery password. [S2]
6. "Comencemos" → home screen. [S2]

## Supported countries
| Country | Send/receive digital dollars | Local add money / withdraw |
|---|---|---|
| Argentina | Yes | Yes — add via Khipu or bank transfer; withdraw via bank transfer |
| Chile | Yes | Yes — add via Khipu or bank transfer; withdraw via bank transfer |
| Colombia | Yes | Yes — add via PSE, Nequi or Bancolombia; withdraw via bank transfer or Bre-B |
| Anywhere else (incl. Indonesia) | Yes | **No** |
- Digital-dollar features (send, receive, payment links, requests) work in any country. [S4]
- Reference currencies for display: ARS, CLP, COP, EUR. Balance is always held in digital dollars. [S4]
- "More countries are coming / siempre estamos agregando más" — no list or date given. [S1][S4][S10]

## On-ramp / off-ramp (agregar saldo / retirar)
- Via licensed local partners, inside the app; partners are not named. [S1][S5][S7]
- Requires identity verification (KYC) first; a new account only shows crypto deposits until verified. [S5]
- Withdrawals go to a bank account in the user's own name, in local currency. [S4]
- Flow: Home → **Depósito** → "Iniciar verificación" → wait for approval → choose local option → enter amount (digital dollars or local currency) → **fees shown before confirm** → digital dollars appear once processed. No processing time given. [S5]

## Identity verification (KYC)
- Needed only to move money between the wallet and local currency. Sending/receiving digital dollars never needs it. [S5][S7][S8]
- Documents: Argentina DNI; Chile RUT; Colombia Cédula de Ciudadanía, Pasaporte, Cédula de Extranjería or Permiso de Residencia. Only these three countries listed. [S8]
- Steps: Depósito/Retiro → banner "Verifica tu identidad" → "Iniciar verificación" → personal data + photo of ID. Statuses: "En Progreso", "En Revisión", "Acción requerida". Takes "unos minutos", one time. [S8]
- MozaikPay stores the result, not the document; partners receive name, date of birth, document number, address (never the photo). [S7]

## Sending to a username
- **Transferir** tab → amount (digital dollars or local currency) → **Enviar** → search username → optional note → **Confirmar pago** → **Confirmar** → "Enviado con éxito" → appears in "Actividad reciente". [S6]
- "Las transferencias entre usuarios son instantáneas y gratis"; arrives "en segundos". [S1][S6]

## Payment links (enlace de pago)
1. **Transferir** → amount → **Enviar**. [S3]
2. Tap **Generar un enlace de pago** (below recent contacts). [S3]
3. Optional note (the claimer sees it). [S3]
4. Choose expiry 1 hour to 7 days → **Siguiente** (screen shows exact expiry date/time). [S3]
5. **Revisar enlace de pago** → **Confirmar** (identity confirm if asked). [S3]
6. **Enlace de pago** screen → **Compartir enlace**, or recipient scans the QR in person. [S3]
- Amount is held from the balance while the link waits. [S3]
- Recipient does not need an account or username; they can install the app and claim before expiry. Anyone with the link can claim — share only through a trusted channel. [S3]
- Revoke while active: Actividad reciente → link → **Revocar enlace de pago** → funds return. Expired links return funds automatically. [S3]
- The payment-link page does not mention fees. [S3]

## Fees
- "Se muestran por adelantado" — shown before confirming, for local add-money/withdraw. No amounts published. [S1][S5]
- User-to-user transfers: free. [S1][S6][S10]
- **Do not state any fee amount and do not compare fees with other apps (bounty rule).**

## Things NOT in the docs (do not claim)
- Exchange rates, fee amounts, limits, processing times for deposits/withdrawals, partner names, interest/yield, cards, support for Indonesia or Asia.

# EmailJS Setup Guide

Follow these steps to set up EmailJS and receive contact form messages in your email:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. After logging in, go to the "Email Services" section
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to the "Email Templates" section
2. Click "Create New Template"
3. Set up your template with these variables (important!):
   - `{{from_name}}` or `{{name}}` - for the sender's name
   - `{{reply_to}}` or `{{email}}` - for the sender's email
   - `{{message}}` - for the message content

Example template:
```
Subject: New Contact Form Message from {{from_name}}

Name: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}
```

4. **Copy the Template ID** - you'll need this later
5. Save the template

## Step 4: Get Your Public Key

1. Go to "Account" section
2. Find "API Keys"
3. **Copy your Public Key** - you'll need this later

## Step 5: Update the Contact Component

Open `Contact.jsx` and replace these values around line 36-38:

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## Step 6: Important - Update Form Field Names

Make sure your form field names match your EmailJS template variables:

In your EmailJS template, if you used:
- `{{from_name}}` → form field should be `name="from_name"`
- `{{reply_to}}` → form field should be `name="reply_to"`
- `{{message}}` → form field should be `name="message"`

Currently, the form uses:
- `name="name"`
- `name="email"`
- `name="message"`

**Option 1:** Update the form field names in Contact.jsx to match your template
**Option 2:** Update your EmailJS template to use `{{name}}`, `{{email}}`, and `{{message}}`

### If you choose Option 2 (recommended), your template should be:

```
Subject: New Contact Form Message from {{name}}

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

## Step 7: Test Your Form

1. Save all changes
2. Run your development server: `npm run dev`
3. Navigate to the contact section
4. Fill out and submit the form
5. Check your email inbox for the message!

## Troubleshooting

### Not receiving emails?
1. Check your EmailJS dashboard for error logs
2. Verify your Service ID, Template ID, and Public Key are correct
3. Make sure form field names match template variables
4. Check your spam folder
5. Verify your email service is properly connected

### Getting errors in console?
1. Open browser DevTools (F12)
2. Check the Console tab for error messages
3. Verify all EmailJS credentials are entered correctly
4. Make sure @emailjs/browser package is installed: `npm list @emailjs/browser`

## EmailJS Free Tier Limits

The free tier includes:
- 200 emails per month
- 2 email services
- 2 email templates

This should be sufficient for a personal portfolio site!

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

**Important Security Note:** 
The Public Key is safe to use in client-side code. However, consider implementing rate limiting or a captcha if your site becomes popular to prevent spam.

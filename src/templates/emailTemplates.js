const emailTemplates = {
  // Welcome & Email Verification Template
  welcomeTemplate: (name, emailToken, baseUrl = 'http://localhost:3000') => {
    return {
      subject: 'Welcome to Our Car Rental Service - Please Verify Your Email',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Car Rental Service</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .button { display: inline-block; background: #28a745; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
                .token-box { background: #e9ecef; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center; font-family: monospace; }
                .footer { text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🚗 Welcome to Car Rental Service!</h1>
            </div>
            <div class="content">
                <h2>Hello ${name}!</h2>
                <p>Thank you for signing up with our Car Rental Service. We're excited to have you on board!</p>
                
                <p><strong>To complete your registration, please verify your email address:</strong></p>
                
                <div class="token-box">
                    <strong>Verification Token:</strong><br>
                    <code>${emailToken}</code>
                </div>
                
                <p>Or click the button below to verify automatically:</p>
                <a href="${baseUrl}/verify-email/${emailToken}" class="button">Verify Email Address</a>
                
                <p><strong>What's next?</strong></p>
                <ul>
                    <li>✅ Browse our extensive fleet of vehicles</li>
                    <li>✅ Book your perfect rental car</li>
                    <li>✅ Enjoy seamless pickup and drop-off</li>
                    <li>✅ Access exclusive member benefits</li>
                </ul>
                
                <p>If you didn't create this account, please ignore this email.</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>The Car Rental Service Team</p>
                <p><small>This verification link will expire in 24 hours for security reasons.</small></p>
            </div>
        </body>
        </html>
      `,
      text: `
        Welcome to Car Rental Service!
        
        Hello ${name},
        
        Thank you for signing up! To complete your registration, please verify your email address using this token: ${emailToken}
        
        Or visit: ${baseUrl}/verify-email/${emailToken}
        
        If you didn't create this account, please ignore this email.
        
        Best regards,
        The Car Rental Service Team
      `
    };
  },

  // Login Notification Template
  loginNotificationTemplate: (name, loginTime, ipAddress = 'Unknown', location = 'Unknown') => {
    return {
      subject: 'Login Notification - Car Rental Service',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Login Notification</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .info-box { background: #d1ecf1; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #17a2b8; }
                .security-notice { background: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #ffc107; }
                .footer { text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🔐 Successful Login</h1>
            </div>
            <div class="content">
                <h2>Hello ${name}!</h2>
                <p>You have successfully logged into your Car Rental Service account.</p>
                
                <div class="info-box">
                    <h3>Login Details:</h3>
                    <p><strong>Time:</strong> ${loginTime}</p>
                    <p><strong>IP Address:</strong> ${ipAddress}</p>
                    <p><strong>Location:</strong> ${location}</p>
                </div>
                
                <div class="security-notice">
                    <h3>⚠️ Security Notice</h3>
                    <p>If this wasn't you, please change your password immediately and contact our support team.</p>
                </div>
                
                <p>Ready to rent? Browse our latest vehicles and book your next adventure!</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>The Car Rental Service Security Team</p>
            </div>
        </body>
        </html>
      `,
      text: `
        Successful Login - Car Rental Service
        
        Hello ${name},
        
        You have successfully logged into your account.
        
        Login Details:
        - Time: ${loginTime}
        - IP Address: ${ipAddress}
        - Location: ${location}
        
        If this wasn't you, please change your password immediately.
        
        Best regards,
        The Car Rental Service Security Team
      `
    };
  },

  // Password Reset OTP Template
  forgotPasswordTemplate: (name, otp) => {
    return {
      subject: 'Password Reset Request - Car Rental Service',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .otp-box { background: #fff; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center; border: 3px solid #dc3545; }
                .otp-code { font-size: 32px; font-weight: bold; color: #dc3545; letter-spacing: 5px; margin: 10px 0; }
                .warning { background: #f8d7da; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #dc3545; }
                .footer { text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🔒 Password Reset Request</h1>
            </div>
            <div class="content">
                <h2>Hello ${name}!</h2>
                <p>We received a request to reset your password for your Car Rental Service account.</p>
                
                <div class="otp-box">
                    <h3>Your One-Time Password (OTP):</h3>
                    <div class="otp-code">${otp}</div>
                    <p><small>Enter this code to verify your identity</small></p>
                </div>
                
                <div class="warning">
                    <h3>⚠️ Important Security Information:</h3>
                    <ul>
                        <li>This OTP is valid for 10 minutes only</li>
                        <li>Never share this code with anyone</li>
                        <li>If you didn't request this reset, ignore this email</li>
                        <li>Contact support if you're experiencing repeated unauthorized attempts</li>
                    </ul>
                </div>
                
                <p>After verification, you'll be able to set a new password for your account.</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>The Car Rental Service Security Team</p>
            </div>
        </body>
        </html>
      `,
      text: `
        Password Reset Request - Car Rental Service
        
        Hello ${name},
        
        We received a request to reset your password.
        
        Your One-Time Password (OTP): ${otp}
        
        This OTP is valid for 10 minutes only.
        
        If you didn't request this reset, please ignore this email.
        
        Best regards,
        The Car Rental Service Security Team
      `
    };
  },

  // Password Reset Confirmation Template
  passwordResetConfirmationTemplate: (name) => {
    return {
      subject: 'Password Successfully Reset - Car Rental Service',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Reset Confirmation</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .success-box { background: #d4edda; padding: 15px; border-radius: 5px; margin: 20px 0; border-left: 4px solid #28a745; }
                .tips-box { background: #e2e3e5; padding: 15px; border-radius: 5px; margin: 20px 0; }
                .footer { text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>✅ Password Reset Successful</h1>
            </div>
            <div class="content">
                <h2>Hello ${name}!</h2>
                
                <div class="success-box">
                    <h3>🎉 Your password has been successfully reset!</h3>
                    <p>You can now log in to your Car Rental Service account with your new password.</p>
                </div>
                
                <div class="tips-box">
                    <h3>💡 Security Tips:</h3>
                    <ul>
                        <li>Use a strong, unique password</li>
                        <li>Don't share your password with anyone</li>
                        <li>Log out from public computers</li>
                        <li>Contact us if you notice any suspicious activity</li>
                    </ul>
                </div>
                
                <p>Ready to get back on the road? Log in and explore our latest vehicle collection!</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>The Car Rental Service Team</p>
            </div>
        </body>
        </html>
      `,
      text: `
        Password Reset Successful - Car Rental Service
        
        Hello ${name},
        
        Your password has been successfully reset!
        
        You can now log in with your new password.
        
        Security Tips:
        - Use a strong, unique password
        - Don't share your password with anyone
        - Log out from public computers
        
        Best regards,
        The Car Rental Service Team
      `
    };
  },

  // Email Verification Success Template
  emailVerificationSuccessTemplate: (name) => {
    return {
      subject: 'Email Verified Successfully - Welcome Aboard!',
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Verified</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; }
                .success-box { background: #d4edda; padding: 20px; border-radius: 5px; margin: 20px 0; text-align: center; }
                .features-box { background: #fff; padding: 20px; border-radius: 5px; margin: 20px 0; }
                .button { display: inline-block; background: #28a745; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 10px 0; }
                .footer { text-align: center; margin-top: 30px; color: #6c757d; font-size: 14px; }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>🎉 Email Verified Successfully!</h1>
            </div>
            <div class="content">
                <h2>Congratulations ${name}!</h2>
                
                <div class="success-box">
                    <h3>✅ Your email has been verified!</h3>
                    <p>Your Car Rental Service account is now fully activated and ready to use.</p>
                </div>
                
                <div class="features-box">
                    <h3>🚗 What you can do now:</h3>
                    <ul>
                        <li>Browse our premium vehicle collection</li>
                        <li>Book rentals instantly</li>
                        <li>Manage your bookings online</li>
                        <li>Access exclusive member discounts</li>
                        <li>Enjoy 24/7 customer support</li>
                    </ul>
                </div>
                
                <p style="text-align: center;">
                    <a href="#" class="button">Start Browsing Vehicles</a>
                </p>
                
                <p>Thank you for choosing Car Rental Service. We look forward to serving you!</p>
            </div>
            <div class="footer">
                <p>Best regards,<br>The Car Rental Service Team</p>
            </div>
        </body>
        </html>
      `,
      text: `
        Email Verified Successfully!
        
        Congratulations ${name}!
        
        Your email has been verified and your account is now fully activated.
        
        What you can do now:
        - Browse our premium vehicle collection
        - Book rentals instantly
        - Manage your bookings online
        - Access exclusive member discounts
        
        Thank you for choosing Car Rental Service!
        
        Best regards,
        The Car Rental Service Team
      `
    };
  }
};

module.exports = emailTemplates;

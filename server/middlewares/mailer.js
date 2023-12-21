const nodemailer = require('nodemailer');

class Mailer {
    static async sendEmailWithCode(email, code) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        let mailOptions = {
            from: 'support@nextfilm.co',
            to: email,
            subject: 'NextFilm - Password Reset Instructions',
            html: `
            <h1>NEXTFILM</h1> 
            <br><br>
            Dear user,
            <br><br>
            We received a request to reset your password for your NextFilm account. <br><br>Here is your password reset code:

            <span style="font-size:20px; font-weight:bold">${code}</span><br><br>

            If you did not request a password reset, please ignore this email or reply to let us know. This password reset is only valid for the next 30 minutes.

            Thank you,
            NextFilm Support Team`
        };

        let info = await transporter.sendMail(mailOptions);

        console.log('Message sent: %s', info.messageId, code);
    }

    static async sendNewDeviceAlert(email, deviceInfo) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'Nextfilm-New Device Alert',
            html: `
                <h1>Nextfilm-New Device Alert</h1>
                <p>A new device has logged into your account. Here are the details:</p>
                <ul>
                    <li><b>Browser:</b> ${deviceInfo.browser}</li>
                    <li><b>Operating System:</b> ${deviceInfo.os}</li>
                    <li><b>Device:</b> ${deviceInfo.device}</li>
                    <li><b>IP Address:</b> ${deviceInfo.ip}</li>
                    <li><b>Location:</b> ${deviceInfo.location}</li>
                </ul>
                <p>If this was you, you can ignore this email. If not, please secure your account.</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
        } catch (error) {
            console.error('Failed to send email:', error);
        }
    }
}

module.exports = Mailer;
"use server"
import nodemailer from 'nodemailer'

export const contact = async (email, message) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        });
        let mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: 'Message from Portfolio!',
            text: `Sent by: ${email}\n\nMessage:\n\n${message}`
        };
        await transporter.sendMail(mailOptions);
        return { success: true }
    } catch (error) {
        return { success: false }
    }
}
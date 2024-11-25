import nodemailer from 'nodemailer'
class Contact {
    sendEmail = async(req) => {
        const {name, email, phone, company, message} = req
        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: `${process.env.ADDRESS_EMAIL}`,
                    pass: `${process.env.EMAIL_PASSWORD}`,
                },
            });
            const send = await transporter.sendMail({
                from: `"${name}" <${email}>`, // sender address
                to: 'mlearning.help@gmail.com', // list of receivers
                subject: "CONSULTATION CLIENT", // Subject line
                text: `${message}`, // plain text body
                html: `<p>Name: ${name}</p><p>No. Telepon: ${phone}</p><p>Company: ${company}</p><p>${message}</p>`, // html body
            })
            if (send) {
                console.log('success', send.messageId)
                return {
                    status: true,
                    message: 'success',
                    code: 200
                }
            }
        } catch (error) {
            console.log('Error Contact Module Send Email', error)
            return{
                code:500,
                message:"Error When Send Email"
            }
        }
    }
}
const m$contact = new Contact()
export default m$contact
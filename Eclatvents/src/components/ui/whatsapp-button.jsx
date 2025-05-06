import { FaWhatsapp } from "react-icons/fa"

const WhatsAppButton = () => {
    const message = "Hello EclatVents, I have some questions about your services! "
    const whatsappUrl = `https://wa.me/${7206439501}?text=${encodeURIComponent(message)}`

    return(
        <div>
            <div className="fixed z-40 right-6 bottom-6">
                <a href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-[#25D366] rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 hover:scale-110"
                    aria-label="Chat on WhatsApp"
                >
                    <FaWhatsapp className="text-white text-2xl sm:text-3xl" />
                </a>
            </div>
        </div>
    )
}

export default WhatsAppButton
import React, { useState } from "react";

interface FormData {
  email: string;
  message: string;
}

interface Errors {
  [key: string]: boolean;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [popupType, setPopupType] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!formData.email.trim()) {
      newErrors.email = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_ACCESS_KEY,
          name: "Anonymous",
          email: formData.email,
          message: formData.message,
          subject: `Message from Portfolio Contact Form`,
          from_name: "Portfolio Contact Form",
          _replyto: formData.email, 
          _template: "table", 
          _captcha: false,
          _next: window.location.href,
          _cc: "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setPopupType("success");
        setFormData({ email: "", message: "" });
      } else {
        setPopupType("error");
      }
    } catch {
      setPopupType("error");
    } finally {
      setIsSubmitting(false);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 6000);
    }
  };

  return (
    <div className="h-screen w-full bg-black flex flex-col relative font-['Fractul']">
      <div className="absolute top-8 left-8 text-[#f5deb3] text-base font-medium">
        Contact
      </div>
      <div className="flex-1 flex items-center justify-center px-8 sm:mt-1">
        <div className="space-y-10 text-center">
          <div>
            <p className="text-[#f5deb3] text-2xl font-bold mb-3">
              Get In Touch
            </p>
            <div className="space-y-1.5">
              <div className="text-[#f5deb3] text-xs">
                qasimch0404@gmail.com
              </div>
              <div className="text-[#f5deb3] text-xs">+92 310 2755291</div>
            </div>
          </div>

          <div>
            <p className="text-[#f5deb3] text-2xl font-bold mb-3">
              Professional Links
            </p>
            <div className="space-y-1.5 flex flex-col items-center justify-center">
              <a
                href="https://drive.google.com/file/d/1y4Vjmx64-omJnOslyUd19x5JR6wNpjWa/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-[#f5deb3] text-xs w-30 hover:opacity-90 hover:tracking-wide transition-all"
              >
                Resume / CV
              </a>
              <a
                href="https://github.com/Muhammad-Qasim-Sajid"
                target="_blank"
                rel="noreferrer"
                className="text-[#f5deb3] text-xs w-30 hover:opacity-90 hover:tracking-wide transition-all"
              >
                GitHub
              </a>
              <button
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/muhammad-qasim-2874b5377/",
                    "_blank"
                  )
                }
                className="text-[#f5deb3] text-xs w-30 hover:opacity-90 hover:tracking-wide transition-all cursor-pointer"
              >
                LinkedIn
              </button>
            </div>
          </div>

          <div>
            <p className="text-[#f5deb3] text-2xl font-bold mb-2">
              Leave a message
            </p>
            <div className="flex flex-col items-center justify-center space-y-3">
              <input
                className={`border-1 ${
                  errors.email ? "border-red-500" : "border-[#f5deb3]"
                } outline-none px-2 py-1 pt-1.5 text-[#f5deb3] text-[11px] bg-transparent`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                required
              />
              <textarea
                className={`border-1 ${
                  errors.message ? "border-red-500" : "border-[#f5deb3]"
                } outline-none px-2 py-1 pt-1.5 text-[#f5deb3] text-[11px] resize-none bg-transparent whitespace-pre-wrap`}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can I help you?"
                rows={3}
                required
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`text-[#f5deb3] text-[10px] border-1 border-[#f5deb3] px-4 py-1 outline-none transition-colors ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#f5deb3] hover:text-black cursor-pointer"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
        <p className="absolute bottom-2 text-[#f5deb3] sm:text-[10px] text-[9px] font-medium font-['Fractul']">
          © {new Date().getFullYear()} Qasim. All rights reserved.
        </p>
      </div>

      {/* Popup */}
      {showPopup && (
        <div
          className={`fixed bottom-12 left-4 px-4 pl-3.5 py-2 pt-2.5 text-sm transition-transform duration-300 ${
            popupType === "success"
              ? "bg-[#f5deb3] text-black"
              : "bg-[#f5deb3] text-red-600"
          }`}
          style={{
            animation:
              "slideIn 0.3s ease-out, fadeOut 0.3s ease-in 5s forwards",
          }}
        >
          {popupType === "success"
            ? "Message sent successfully!"
            : "Failed to send message!"}
        </div>
      )}
    </div>
  );
};

export default ContactSection;
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function BlogForm({ fields, className }) {
    const [formValues, setFormValues] = useState({});
    const [currentUrl, setCurrentUrl] = useState("");

    // Initialize formValues based on the fields prop
    useEffect(() => {
        const initialValues = {};
        fields.forEach((field) => {
            initialValues[field.value] = ""; // Initialize with empty strings
        });
        setFormValues(initialValues);

        // Set current URL (only runs on client-side)
        if (typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, [fields]);

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/formData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formValues,
                    page_url: currentUrl,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log("Form successfully submitted:", result);
                alert("Form submitted successfully");
                setFormValues({}); // Reset form after submission
            } else {
                console.error("Error submitting form:", response.statusText);
            }
        } catch (error) {
            console.error("Error sending form data:", error);
        }
    };

    // Handle field value change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div className={`w-full mx-auto lg:w-[80%] max-w-sm bg-gradient-to-b from-[#FEFEFC] to-[#F9F6E3] border-[1px] border-[#DFDFDF] rounded-3xl ${className}`}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mx-auto">
                {fields.map((field) => (
                    <div key={field.id} className="relative">
                        {field.type === "textarea" ? (
                            <div className="relative">
                                <textarea
                                    id={field.value}
                                    name={field.value}
                                    value={formValues[field.value] || ""}
                                    placeholder=" "
                                    onChange={handleInputChange}
                                    required={field.required}
                                    className="peer block w-full min-h-[10rem] py-2 px-4 rounded-3xl border-[1px] border-[#DFDFDF] bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent"
                                />
                                <label
                                    htmlFor={field.value}
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                                >
                                    {field.placeholder}
                                </label>
                            </div>
                        ) : (
                            <div className="relative">
                                <input
                                    id={field.value}
                                    type={field.type}
                                    name={field.value}
                                    value={formValues[field.value] || ""}
                                    placeholder=" "
                                    onChange={handleInputChange}
                                    required={field.required}
                                    className="peer block w-full py-2 px-4 rounded-3xl border-[1px] border-[#DFDFDF] bg-white focus:outline-none focus:ring-1 focus:ring-[#DE0402] focus:border-transparent"
                                />
                                <label
                                    htmlFor={field.value}
                                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-full px-2 peer-focus:px-2 peer-focus:text-[#DE0402] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-4"
                                >
                                    {field.placeholder}
                                </label>
                            </div>
                        )}
                    </div>
                ))}

                <button
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        marginTop: "0.5rem",
                        backgroundColor: "#DE0402",
                        color: "white",
                        borderRadius: "1.5rem",
                        transition: "all 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff2d2d")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#DE0402")}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default BlogForm;

BlogForm.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            type: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            required: PropTypes.bool,
        })
    ).isRequired,
    className: PropTypes.string,
};

import React from "react";
import { usePage, Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ personalInformation }) {
    const flash = usePage().props.flash || {};
    const { baseUrl } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        hero_banner_image_url: null,
        profile_image_url: null,
        cv_url: null,
        github_url: personalInformation?.github_url ?? "",
        linkedin_url: personalInformation?.linkedin_url ?? "",
        whatsapp_url: personalInformation?.whatsapp_url ?? "",
        skype_url: personalInformation?.skype_url ?? "",
        website_url: personalInformation?.website_url ?? "",
        phone_number: personalInformation?.phone_number ?? "",
        email: personalInformation?.email ?? "",
        address: personalInformation?.address ?? "",
        map_url: personalInformation?.map_url ?? "",
        freelance: personalInformation?.freelance ?? "Available",
        degree: personalInformation?.degree ?? "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("personal-information.store"), {
            forceFormData: true,
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Personal Information
                </h2>
            }
        >
            <Head title="Edit Personal Information" />

            <div className="py-6">
                {flash.success && (
                    <div className="mb-4 rounded bg-green-100 p-4 text-green-700">
                        {flash.success}
                    </div>
                )}
                {Object.keys(errors).length > 0 && (
                    <div className="mb-4 rounded bg-red-100 p-4 text-red-700">
                        <ul className="list-disc list-inside">
                            {Object.entries(errors).map(([key, error]) => (
                                <li key={key}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded bg-white p-6 shadow-sm">
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {/* Existing Fields (GitHub, LinkedIn, WhatsApp, Skype) */}
                            {/* GitHub URL */}
                            <div className="mb-4">
                                <label
                                    htmlFor="github_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    id="github_url"
                                    value={data.github_url}
                                    onChange={(e) =>
                                        setData("github_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.github_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.github_url}
                                    </div>
                                )}
                            </div>

                            {/* LinkedIn URL */}
                            <div className="mb-4">
                                <label
                                    htmlFor="linkedin_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    LinkedIn URL
                                </label>
                                <input
                                    type="url"
                                    id="linkedin_url"
                                    value={data.linkedin_url}
                                    onChange={(e) =>
                                        setData("linkedin_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.linkedin_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.linkedin_url}
                                    </div>
                                )}
                            </div>

                            {/* WhatsApp URL */}
                            <div className="mb-4">
                                <label
                                    htmlFor="whatsapp_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    WhatsApp URL
                                </label>
                                <input
                                    type="url"
                                    id="whatsapp_url"
                                    value={data.whatsapp_url}
                                    onChange={(e) =>
                                        setData("whatsapp_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.whatsapp_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.whatsapp_url}
                                    </div>
                                )}
                            </div>

                            {/* Skype URL */}
                            <div className="mb-4">
                                <label
                                    htmlFor="skype_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Skype URL
                                </label>
                                <input
                                    type="url"
                                    id="skype_url"
                                    value={data.skype_url}
                                    onChange={(e) =>
                                        setData("skype_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.skype_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.skype_url}
                                    </div>
                                )}
                            </div>

                            {/* Degree */}
                            <div className="mb-4">
                                <label
                                    htmlFor="degree"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Degree
                                </label>
                                <input
                                    type="text"
                                    id="degree"
                                    value={data.degree}
                                    onChange={(e) =>
                                        setData("degree", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.degree && (
                                    <div className="text-sm text-red-600">
                                        {errors.degree}
                                    </div>
                                )}
                            </div>

                            {/* Website URL */}
                            <div className="mb-4">
                                <label
                                    htmlFor="website_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Website URL
                                </label>
                                <input
                                    type="url"
                                    id="website_url"
                                    value={data.website_url}
                                    onChange={(e) =>
                                        setData("website_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.website_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.website_url}
                                    </div>
                                )}
                            </div>

                            {/* Phone Number */}
                            <div className="mb-4">
                                <label
                                    htmlFor="phone_number"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone Number
                                </label>
                                <input
                                    type="text"
                                    id="phone_number"
                                    value={data.phone_number}
                                    onChange={(e) =>
                                        setData("phone_number", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.phone_number && (
                                    <div className="text-sm text-red-600">
                                        {errors.phone_number}
                                    </div>
                                )}
                            </div>

                            {/* Email */}
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.email && (
                                    <div className="text-sm text-red-600">
                                        {errors.email}
                                    </div>
                                )}
                            </div>

                            {/* Address */}
                            <div className="mb-4">
                                <label
                                    htmlFor="address"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Address
                                </label>
                                <textarea
                                    id="address"
                                    value={data.address}
                                    onChange={(e) =>
                                        setData("address", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.address && (
                                    <div className="text-sm text-red-600">
                                        {errors.address}
                                    </div>
                                )}
                            </div>

                            {/* Map URL */}
                            <div className="mb-4">
                                <label
                                    htmlFor="map_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Map URL
                                </label>
                                <textarea
                                    id="map_url"
                                    value={data.map_url}
                                    onChange={(e) =>
                                        setData("map_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.map_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.map_url}
                                    </div>
                                )}
                            </div>

                            {/* Freelance */}
                            <div className="mb-4">
                                <label
                                    htmlFor="freelance"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Freelance Status
                                </label>
                                <select
                                    id="freelance"
                                    value={data.freelance}
                                    onChange={(e) =>
                                        setData("freelance", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                >
                                    <option value="Available">Available</option>
                                    <option value="Unavailable">
                                        Unavailable
                                    </option>
                                </select>
                                {errors.freelance && (
                                    <div className="text-sm text-red-600">
                                        {errors.freelance}
                                    </div>
                                )}
                            </div>

                            {/* Hero Banner Image */}
                            <div className="mb-4">
                                <label
                                    htmlFor="hero_banner_image_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Hero Banner Image
                                </label>
                                {personalInformation.hero_banner_image_url && (
                                    <img
                                        src={`${baseUrl}/storage/app/public/${personalInformation.hero_banner_image_url}`}
                                        alt="Hero Banner"
                                        className="mb-2 h-20 w-auto rounded object-cover"
                                    />
                                )}
                                <input
                                    type="file"
                                    id="hero_banner_image_url"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setData(
                                            "hero_banner_image_url",
                                            e.target.files[0]
                                        )
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.hero_banner_image_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.hero_banner_image_url}
                                    </div>
                                )}
                            </div>

                            {/* Profile Image */}
                            <div className="mb-6">
                                <label
                                    htmlFor="profile_image_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Profile Image
                                </label>
                                {personalInformation.profile_image_url && (
                                    <img
                                        src={`${baseUrl}/storage/app/public/${personalInformation.profile_image_url}`}
                                        alt="Profile"
                                        className="mb-2 h-20 w-auto rounded object-cover"
                                    />
                                )}
                                <input
                                    type="file"
                                    id="profile_image_url"
                                    accept="image/*"
                                    onChange={(e) =>
                                        setData(
                                            "profile_image_url",
                                            e.target.files[0]
                                        )
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.profile_image_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.profile_image_url}
                                    </div>
                                )}
                            </div>

                            {/* CV File Upload */}
                            <div className="mb-6">
                                <label
                                    htmlFor="cv_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    CV File (PDF)
                                </label>

                                {personalInformation.cv_url && (
                                    <div className="my-2">
                                        <a
                                            href={`${baseUrl}/storage/app/public/${personalInformation.cv_url}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 underline"
                                        >
                                            View Current CV
                                        </a>
                                    </div>
                                )}

                                <input
                                    type="file"
                                    id="cv_url"
                                    accept=".pdf"
                                    onChange={(e) =>
                                        setData("cv_url", e.target.files[0])
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />

                                {errors.cv_url && (
                                    <div className="text-sm text-red-600">
                                        {errors.cv_url}
                                    </div>
                                )}
                            </div>

                            {/* Submit Buttons */}
                            <div className="flex items-center justify-between">
                                <Link
                                    href={route("dashboard")}
                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                >
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex justify-center rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

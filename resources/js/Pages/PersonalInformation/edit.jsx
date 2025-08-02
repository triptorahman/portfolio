import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";

export default function Edit({ personalInformation }) {
    const flash = usePage().props.flash || {};

    const { data, setData, post, processing, errors } = useForm({
        hero_banner_image_url: null,
        profile_image_url: null,
        github_url: personalInformation?.github_url ?? "",
        linkedin_url: personalInformation?.linkedin_url ?? "",
        whatsapp_url: personalInformation?.whatsapp_url ?? "",
        skype_url: personalInformation?.skype_url ?? "",
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
                            {/* Github URL */}
                            <div className="mb-4">
                                <label
                                    htmlFor="github_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    GitHub URL
                                </label>
                                <input
                                    type="url"
                                    name="github_url"
                                    id="github_url"
                                    value={data.github_url}
                                    onChange={(e) =>
                                        setData("github_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.github_url && (
                                    <div className="mt-1 text-sm text-red-600">
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
                                    name="linkedin_url"
                                    id="linkedin_url"
                                    value={data.linkedin_url}
                                    onChange={(e) =>
                                        setData("linkedin_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.linkedin_url && (
                                    <div className="mt-1 text-sm text-red-600">
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
                                    name="whatsapp_url"
                                    id="whatsapp_url"
                                    value={data.whatsapp_url}
                                    onChange={(e) =>
                                        setData("whatsapp_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.whatsapp_url && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.whatsapp_url}
                                    </div>
                                )}
                            </div>

                            {/* Skype URL */}
                            <div className="mb-6">
                                <label
                                    htmlFor="skype_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Skype URL
                                </label>
                                <input
                                    type="url"
                                    name="skype_url"
                                    id="skype_url"
                                    value={data.skype_url}
                                    onChange={(e) =>
                                        setData("skype_url", e.target.value)
                                    }
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm sm:text-sm"
                                />
                                {errors.skype_url && (
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.skype_url}
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
                                        src={`/storage/${personalInformation.hero_banner_image_url}`}
                                        alt="Hero Banner"
                                        className="mb-2 h-20 w-auto rounded object-cover"
                                    />
                                )}
                                <input
                                    type="file"
                                    name="hero_banner_image_url"
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
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.hero_banner_image_url}
                                    </div>
                                )}
                            </div>

                            {/* Profile Image */}
                            <div className="mb-4">
                                <label
                                    htmlFor="profile_image_url"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Profile Image
                                </label>
                                {personalInformation.profile_image_url && (
                                    <img
                                        src={`/storage/${personalInformation.profile_image_url}`}
                                        alt="Profile Image"
                                        className="mb-2 h-20 w-auto rounded object-cover"
                                    />
                                )}
                                <input
                                    type="file"
                                    name="profile_image_url"
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
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.profile_image_url}
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center justify-between">
                                <Link
                                    href={route("personal-information.index")}
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

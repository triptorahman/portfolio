import React, { useState, useEffect } from "react";
import { usePage, Head, useForm, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Edit({ sectionOverviewContent }) {
    const flash = usePage().props.flash || {};
    const [showSuccess, setShowSuccess] = useState(!!flash.success);

    useEffect(() => {
        if (flash.success) {
            setShowSuccess(true);
        }
    }, [flash.success]);

    const { data, setData, post, processing, errors } = useForm({
        about_first: sectionOverviewContent?.about_first ?? "",
        about_middle: sectionOverviewContent?.about_middle ?? "",
        about_last: sectionOverviewContent?.about_last ?? "",
        skill: sectionOverviewContent?.skill ?? "",
        resume: sectionOverviewContent?.resume ?? "",
        portfolio: sectionOverviewContent?.portfolio ?? "",
        service: sectionOverviewContent?.service ?? "",
        contact: sectionOverviewContent?.contact ?? "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post(route("section-overview-content.store"), {
            forceFormData: true,
        });
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Section Overview Content
                </h2>
            }
        >
            <Head title="Edit Section Overview Content" />
            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded bg-white p-6 shadow-sm">
                        {showSuccess && (
                            <div
                                className="mb-4 relative rounded bg-green-100 p-4 text-green-700 w-full break-words"
                                style={{ maxWidth: "600px", margin: "0 auto", wordBreak: "break-word" }}
                            >
                                {flash.success}
                                <button
                                    onClick={() => setShowSuccess(false)}
                                    className="absolute top-2 right-2 text-green-700 hover:text-green-900"
                                    aria-label="Close"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="mb-4">
                                <label htmlFor="about_first" className="block text-sm font-medium text-gray-700">About Overview (First)</label>
                                <textarea
                                    name="about_first"
                                    id="about_first"
                                    value={data.about_first}
                                    onChange={e => setData('about_first', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.about_first && <div className="mt-1 text-sm text-red-600">{errors.about_first}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="about_middle" className="block text-sm font-medium text-gray-700">About Overview (Middle)</label>
                                <textarea
                                    name="about_middle"
                                    id="about_middle"
                                    value={data.about_middle}
                                    onChange={e => setData('about_middle', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.about_middle && <div className="mt-1 text-sm text-red-600">{errors.about_middle}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="about_last" className="block text-sm font-medium text-gray-700">About Overview (Last)</label>
                                <textarea
                                    name="about_last"
                                    id="about_last"
                                    value={data.about_last}
                                    onChange={e => setData('about_last', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.about_last && <div className="mt-1 text-sm text-red-600">{errors.about_last}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="skill" className="block text-sm font-medium text-gray-700">Skill Overview Section</label>
                                <textarea
                                    name="skill"
                                    id="skill"
                                    value={data.skill}
                                    onChange={e => setData('skill', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.skill && <div className="mt-1 text-sm text-red-600">{errors.skill}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="resume" className="block text-sm font-medium text-gray-700">Resume Overview Section</label>
                                <textarea
                                    name="resume"
                                    id="resume"
                                    value={data.resume}
                                    onChange={e => setData('resume', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.resume && <div className="mt-1 text-sm text-red-600">{errors.resume}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">Portfolio Overview Section</label>
                                <textarea
                                    name="portfolio"
                                    id="portfolio"
                                    value={data.portfolio}
                                    onChange={e => setData('portfolio', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.portfolio && <div className="mt-1 text-sm text-red-600">{errors.portfolio}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Overview Section</label>
                                <textarea
                                    name="service"
                                    id="service"
                                    value={data.service}
                                    onChange={e => setData('service', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.service && <div className="mt-1 text-sm text-red-600">{errors.service}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact Overview Section</label>
                                <textarea
                                    name="contact"
                                    id="contact"
                                    value={data.contact}
                                    onChange={e => setData('contact', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.contact && <div className="mt-1 text-sm text-red-600">{errors.contact}</div>}
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

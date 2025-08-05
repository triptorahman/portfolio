import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Edit({ experience }) {
    const { data, setData, put, processing, errors } = useForm({
        designation: experience.designation || '',
        duration: experience.duration || '',
        company_name: experience.company_name || '',
        company_address: experience.company_address || '',
        work_description: experience.work_description || '',
        sort_order: experience.sort_order || '',
        status: experience.status === 'active' ? 'active' : 'inactive',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('experiences.update', experience.id));
    }

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit Experience</h2>}
        >
            <Head title="Edit Experience" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit}>
                            {/* Designation */}
                            <div className="mb-4">
                                <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation</label>
                                <input
                                    type="text"
                                    name="designation"
                                    id="designation"
                                    value={data.designation}
                                    onChange={e => setData('designation', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.designation && <div className="mt-1 text-sm text-red-600">{errors.designation}</div>}
                            </div>

                            {/* Duration */}
                            <div className="mb-4">
                                <label htmlFor="duration" className="block text-sm font-medium text-gray-700">Duration</label>
                                <input
                                    type="text"
                                    name="duration"
                                    id="duration"
                                    value={data.duration}
                                    onChange={e => setData('duration', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.duration && <div className="mt-1 text-sm text-red-600">{errors.duration}</div>}
                            </div>

                            {/* Company Name */}
                            <div className="mb-4">
                                <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">Company Name</label>
                                <input
                                    type="text"
                                    name="company_name"
                                    id="company_name"
                                    value={data.company_name}
                                    onChange={e => setData('company_name', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.company_name && <div className="mt-1 text-sm text-red-600">{errors.company_name}</div>}
                            </div>

                            {/* Company Address */}
                            <div className="mb-4">
                                <label htmlFor="company_address" className="block text-sm font-medium text-gray-700">Company Address</label>
                                <input
                                    type="text"
                                    name="company_address"
                                    id="company_address"
                                    value={data.company_address}
                                    onChange={e => setData('company_address', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.company_address && <div className="mt-1 text-sm text-red-600">{errors.company_address}</div>}
                            </div>

                            {/* Work Description with ReactQuill */}
                            <div className="mb-4">
                                <label htmlFor="work_description" className="block text-sm font-medium text-gray-700">
                                    Work Description <span className="text-red-500">*</span>
                                </label>
                                <ReactQuill
                                    theme="snow"
                                    value={data.work_description}
                                    onChange={(content) => setData('work_description', content)}
                                    className={`mt-1 ${
                                        errors.work_description ? 'border border-red-500' : ''
                                    }`}
                                />
                                {errors.work_description && (
                                    <div className="mt-1 text-sm text-red-600">{errors.work_description}</div>
                                )}
                            </div>

                            {/* Sort Order */}
                            <div className="mb-4">
                                <label htmlFor="sort_order" className="block text-sm font-medium text-gray-700">Sort Order</label>
                                <input
                                    type="number"
                                    name="sort_order"
                                    id="sort_order"
                                    value={data.sort_order}
                                    onChange={e => setData('sort_order', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    min="1"
                                />
                                {errors.sort_order && <div className="mt-1 text-sm text-red-600">{errors.sort_order}</div>}
                            </div>

                            {/* Status */}
                            <div className="mb-6">
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    name="status"
                                    id="status"
                                    value={data.status}
                                    onChange={e => setData('status', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                {errors.status && <div className="mt-1 text-sm text-red-600">{errors.status}</div>}
                            </div>

                            <div className="flex items-center justify-between">
                                <Link
                                    href={route('experiences.index')}
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

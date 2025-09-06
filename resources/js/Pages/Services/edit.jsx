import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';

export default function Edit({ service }) {
    const { data, setData, put, processing, errors } = useForm({
        title: service.title || '',
        icon: service.icon || '',
        short_description: service.short_description || '',
        sort_order: service.sort_order || '',
        status: service.status === 'active' ? 'active' : 'inactive',
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route('services.update', service.id));
    }

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Edit Service Section</h2>}
        >
            <Head title="Edit Service Section" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit}>
                            {/* Title */}
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.title && <div className="mt-1 text-sm text-red-600">{errors.title}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="icon" className="block text-sm font-medium text-gray-700">Icon</label>
                                <input
                                    type="text"
                                    name="icon"
                                    id="icon"
                                    value={data.icon}
                                    onChange={e => setData('icon', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.icon && <div className="mt-1 text-sm text-red-600">{errors.icon}</div>}
                            </div>

                            <div className="mb-4">
                                <label htmlFor="short_description" className="block text-sm font-medium text-gray-700">Short Description</label>
                                <textarea
                                    name="short_description"
                                    id="short_description"
                                    value={data.short_description}
                                    onChange={e => setData('short_description', e.target.value)}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.short_description && <div className="mt-1 text-sm text-red-600">{errors.short_description}</div>}
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
                                    href={route('services.index')}
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

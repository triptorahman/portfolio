import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm, usePage } from "@inertiajs/react";

export default function Index({ portfolios }) {
    const flash = usePage().props.flash || {};
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this portfolio type?")) {
            destroy(route("portfolios.destroy", id));
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Portfolios
                </h2>
            }
        >
            <Head title="Portfolios" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {flash.success && (
                        <div className="mb-4 rounded bg-green-100 p-4 text-green-700">
                            {flash.success}
                        </div>
                    )}

                    <div className="mb-4">
                        <Link
                            href={route("portfolios.create")}
                            className="inline-block rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                        >
                            + New Portfolio
                        </Link>
                    </div>

                    <div className="overflow-x-auto rounded bg-white shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Title
                                    </th>
                                    <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Sort Order
                                    </th>
                                    <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Portfolio Type
                                    </th>
                                    <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Short Description
                                    </th>
                                    <th className="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Status
                                    </th>
                                    <th className="whitespace-nowrap px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {portfolios.length > 0 ? (
                                    portfolios.map((section) => (
                                        <tr key={section.id}>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                                {section.title}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                                {section.sort_order}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                                {section.portfolio_type?.title}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                                {section.short_description}
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                                                <span
                                                    className={`inline-block rounded px-2 py-1 text-xs font-semibold text-white ${
                                                        section.status === "active"
                                                            ? "bg-green-500"
                                                            : "bg-red-500"
                                                    }`}
                                                >
                                                    {section.status === "active"
                                                        ? "Active"
                                                        : "Inactive"}
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                                <Link
                                                    href={route(
                                                        "portfolios.edit",
                                                        section.id
                                                    )}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        handleDelete(section.id)
                                                    }
                                                    className="ml-4 text-red-600 hover:text-red-800"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td
                                            colSpan="5"
                                            className="px-6 py-4 text-center text-sm text-gray-500"
                                        >
                                            No portfolios found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

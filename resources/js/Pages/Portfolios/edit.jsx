import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Edit({ portfolio, portfolio_types }) {
    const { data, setData, post, processing, errors } = useForm({
        title: portfolio.title || "",
        sort_order: portfolio.sort_order || "",
        status: portfolio.status === "active" ? "active" : "inactive",
        portfolio_type_id: portfolio.portfolio_type_id || "",
        short_description: portfolio.short_description || "",
        client_name: portfolio.client_name || "",
        project_url: portfolio.project_url || "",
        description: portfolio.description || "",
        image_url: null,
    });

    function handleSubmit(e) {
    e.preventDefault();
    post(route("portfolios.update", portfolio.id));
    }

    // General handler for all fields
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            setData(name, files[0] ?? null);
        } else {
            setData(name, value);
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Edit Portfolio
                </h2>
            }
        >
            <Head title="Edit Portfolio" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden rounded bg-white p-6 shadow-sm">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            {/* Title */}
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    value={data.title}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                {errors.title && (
                                    <div className="mt-1 text-sm text-red-600">{errors.title}</div>
                                )}
                            </div>

                            {/* Sort Order */}
                            <div className="mb-4">
                                <label htmlFor="sort_order" className="block text-sm font-medium text-gray-700">
                                    Sort Order
                                </label>
                                <input
                                    type="number"
                                    name="sort_order"
                                    id="sort_order"
                                    value={data.sort_order}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    min="1"
                                />
                                {errors.sort_order && (
                                    <div className="mt-1 text-sm text-red-600">{errors.sort_order}</div>
                                )}
                            </div>

                            {/* Portfolio Type */}
                            <div className="form-group mb-3">
                                <label htmlFor="portfolio_type_id">
                                    Portfolio Type <span className="text-danger">*</span>
                                </label>
                                <select
                                    className={`form-control ${errors.portfolio_type_id ? "is-invalid" : ""}`}
                                    id="portfolio_type_id"
                                    name="portfolio_type_id"
                                    value={data.portfolio_type_id || ""}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select Portfolio Type</option>
                                    {portfolio_types &&
                                        portfolio_types.map((type) => (
                                            <option key={type.id} value={type.id}>
                                                {type.title}
                                            </option>
                                        ))}
                                </select>
                                {errors.portfolio_type_id && (
                                    <div className="invalid-feedback">{errors.portfolio_type_id}</div>
                                )}
                            </div>

                            {/* Short Description */}
                            <div className="form-group mb-3">
                                <label htmlFor="short_description">
                                    Short Description <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.short_description ? "is-invalid" : ""}`}
                                    id="short_description"
                                    name="short_description"
                                    placeholder="Enter short description"
                                    value={data.short_description || ""}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.short_description && (
                                    <div className="invalid-feedback">{errors.short_description}</div>
                                )}
                            </div>

                            {/* Client Name */}
                            <div className="form-group mb-3">
                                <label htmlFor="client_name">Client Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.client_name ? "is-invalid" : ""}`}
                                    id="client_name"
                                    name="client_name"
                                    placeholder="Enter client name"
                                    value={data.client_name || ""}
                                    onChange={handleChange}
                                />
                                {errors.client_name && (
                                    <div className="invalid-feedback">{errors.client_name}</div>
                                )}
                            </div>

                            {/* Project Image */}
                            <div className="form-group mb-3">
                                <label htmlFor="image_url" className="form-label">
                                    Project Image
                                </label>
                                {portfolio.image_url && (
                                    <img
                                        src={`/storage/${portfolio.image_url}`}
                                        alt="Project"
                                        className="mb-2 h-20 w-auto rounded object-cover"
                                    />
                                )}
                                <input
                                    type="file"
                                    id="image_url"
                                    name="image_url"
                                    accept=".jpg,.jpeg,.png,.svg"
                                    onChange={handleChange}
                                    className={`form-control ${errors.image_url ? "is-invalid" : ""}`}
                                />
                                {errors.image_url && (
                                    <div className="invalid-feedback d-block">{errors.image_url}</div>
                                )}
                            </div>

                            {/* Project URL */}
                            <div className="form-group mb-3">
                                <label htmlFor="project_url">Project URL</label>
                                <input
                                    type="text"
                                    className={`form-control ${errors.project_url ? "is-invalid" : ""}`}
                                    id="project_url"
                                    name="project_url"
                                    placeholder="Enter project URL"
                                    value={data.project_url || ""}
                                    onChange={handleChange}
                                />
                                {errors.project_url && (
                                    <div className="invalid-feedback">{errors.project_url}</div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="form-group mb-3">
                                <label htmlFor="description">
                                    Description <span className="text-danger">*</span>
                                </label>
                                <ReactQuill
                                    theme="snow"
                                    value={data.description}
                                    onChange={(content) => setData("description", content)}
                                    className={`${errors.description ? "is-invalid" : ""}`}
                                />
                                {errors.description && (
                                    <div className="invalid-feedback d-block">{errors.description}</div>
                                )}
                            </div>

                            {/* Status */}
                            <div className="mb-6">
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                    Status
                                </label>
                                <select
                                    name="status"
                                    id="status"
                                    value={data.status}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded border-gray-300 bg-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                >
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                                {errors.status && (
                                    <div className="mt-1 text-sm text-red-600">{errors.status}</div>
                                )}
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between">
                                <Link
                                    href={route("portfolios.index")}
                                    className="inline-flex items-center rounded border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                >
                                    Cancel
                                </Link>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex justify-center rounded bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 disabled:opacity-50"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

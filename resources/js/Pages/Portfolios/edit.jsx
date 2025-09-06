import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link, usePage } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Edit({
    portfolio,
    portfolio_types,
    portfolio_details_images,
}) {
    const { baseUrl } = usePage().props;
    const [projectImagePreview, setProjectImagePreview] = React.useState(null);
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
        details_images: [],
        deleted_details_images: [],
    });

    // Local state for previews
    const [detailsImagePreviews, setDetailsImagePreviews] = React.useState([]);
    const [existingDetailsImages, setExistingDetailsImages] = React.useState(
        portfolio_details_images || []
    );
    const [detailsImageError, setDetailsImageError] = React.useState("");

    function handleSubmit(e) {
        e.preventDefault();
        post(route("portfolios.update", portfolio.id));
    }

    // General handler for all fields
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === "file") {
            setData(name, files[0] ?? null);
            if (name === "image_url") {
                setProjectImagePreview(
                    files[0] ? URL.createObjectURL(files[0]) : null
                );
            }
        } else {
            setData(name, value);
        }
    };

    // Handle new uploads
    const handleDetailsImagesChange = (e) => {
        const files = Array.from(e.target.files);
        setData("details_images", files);
        setDetailsImagePreviews(files.map((file) => URL.createObjectURL(file)));

        if (existingDetailsImages.length + files.length > 0) {
            setDetailsImageError("");
        }
    };

    // Remove a new image before submit
    const handleRemoveNewImage = (idx) => {
        const newFiles = [...data.details_images];
        newFiles.splice(idx, 1);
        setData("details_images", newFiles);
        const newPreviews = [...detailsImagePreviews];
        newPreviews.splice(idx, 1);
        setDetailsImagePreviews(newPreviews);
        if (existingDetailsImages.length + newPreviews.length === 0) {
            setDetailsImageError("At least one details image is required.");
        } else {
            setDetailsImageError("");
        }
    };

    // Handle delete existing image
    const handleDeleteExistingImage = (imgId) => {
        setData("deleted_details_images", [
            ...data.deleted_details_images,
            imgId,
        ]);
        const updatedImages = existingDetailsImages.filter((img) => img.id !== imgId);
        setExistingDetailsImages(updatedImages);
        if (updatedImages.length + detailsImagePreviews.length === 0) {
            setDetailsImageError("At least one details image is required.");
        } else {
            setDetailsImageError("");
        }
    };

    const totalDetailsImages = existingDetailsImages.length + detailsImagePreviews.length;
    const canSubmit = totalDetailsImages > 0;

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
                        <form
                            onSubmit={handleSubmit}
                            encType="multipart/form-data"
                        >
                            {/* Title */}
                            <div className="mb-4">
                                <label
                                    htmlFor="title"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.title}
                                    </div>
                                )}
                            </div>

                            {/* Sort Order */}
                            <div className="mb-4">
                                <label
                                    htmlFor="sort_order"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.sort_order}
                                    </div>
                                )}
                            </div>

                            {/* Portfolio Type */}
                            <div className="form-group mb-3">
                                <label htmlFor="portfolio_type_id">
                                    Portfolio Type{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <select
                                    className={`form-control ${
                                        errors.portfolio_type_id
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="portfolio_type_id"
                                    name="portfolio_type_id"
                                    value={data.portfolio_type_id || ""}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">
                                        Select Portfolio Type
                                    </option>
                                    {portfolio_types &&
                                        portfolio_types.map((type) => (
                                            <option
                                                key={type.id}
                                                value={type.id}
                                            >
                                                {type.title}
                                            </option>
                                        ))}
                                </select>
                                {errors.portfolio_type_id && (
                                    <div className="invalid-feedback">
                                        {errors.portfolio_type_id}
                                    </div>
                                )}
                            </div>

                            {/* Short Description */}
                            <div className="form-group mb-3">
                                <label htmlFor="short_description">
                                    Short Description{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.short_description
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                    id="short_description"
                                    name="short_description"
                                    placeholder="Enter short description"
                                    value={data.short_description || ""}
                                    onChange={handleChange}
                                    required
                                />
                                {errors.short_description && (
                                    <div className="invalid-feedback">
                                        {errors.short_description}
                                    </div>
                                )}
                            </div>

                            {/* Client Name */}
                            <div className="form-group mb-3">
                                <label htmlFor="client_name">Client Name</label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.client_name ? "is-invalid" : ""
                                    }`}
                                    id="client_name"
                                    name="client_name"
                                    placeholder="Enter client name"
                                    value={data.client_name || ""}
                                    onChange={handleChange}
                                />
                                {errors.client_name && (
                                    <div className="invalid-feedback">
                                        {errors.client_name}
                                    </div>
                                )}
                            </div>

                            {/* Project URL */}
                            <div className="form-group mb-3">
                                <label htmlFor="project_url">Project URL</label>
                                <input
                                    type="text"
                                    className={`form-control ${
                                        errors.project_url ? "is-invalid" : ""
                                    }`}
                                    id="project_url"
                                    name="project_url"
                                    placeholder="Enter project URL"
                                    value={data.project_url || ""}
                                    onChange={handleChange}
                                />
                                {errors.project_url && (
                                    <div className="invalid-feedback">
                                        {errors.project_url}
                                    </div>
                                )}
                            </div>

                            {/* Description */}
                            <div className="form-group mb-3">
                                <label htmlFor="description">
                                    Description{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <ReactQuill
                                    theme="snow"
                                    value={data.description}
                                    onChange={(content) =>
                                        setData("description", content)
                                    }
                                    className={`${
                                        errors.description ? "is-invalid" : ""
                                    }`}
                                />
                                {errors.description && (
                                    <div className="invalid-feedback d-block">
                                        {errors.description}
                                    </div>
                                )}
                            </div>

                            {/* Status */}
                            <div className="mb-6">
                                <label
                                    htmlFor="status"
                                    className="block text-sm font-medium text-gray-700"
                                >
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
                                    <div className="mt-1 text-sm text-red-600">
                                        {errors.status}
                                    </div>
                                )}
                            </div>

                            {/* Project Image */}
                            <div className="form-group mb-3">
                                <label
                                    htmlFor="image_url"
                                    className="form-label"
                                >
                                    Project Image
                                </label>
                                {/* File input */}
                                <input
                                    type="file"
                                    id="image_url"
                                    name="image_url"
                                    accept=".jpg,.jpeg,.png,.svg"
                                    onChange={handleChange}
                                    className={`form-control ${
                                        errors.image_url ? "is-invalid" : ""
                                    }`}
                                />
                                {errors.image_url && (
                                    <div className="invalid-feedback d-block">
                                        {errors.image_url}
                                    </div>
                                )}
                                {/* Preview: show new image if selected, else show existing */}
                                <div className="mt-2">
                                    {projectImagePreview ? (
                                        <img
                                            src={projectImagePreview}
                                            alt="Project Preview"
                                            style={{
                                                width: 120,
                                                height: 120,
                                                objectFit: "cover",
                                                borderRadius: 8,
                                            }}
                                        />
                                    ) : (
                                        portfolio.image_url && (
                                            <img
                                                src={`${baseUrl}/storage/app/public/${portfolio.image_url}`}
                                                alt="Project"
                                                style={{
                                                    width: 120,
                                                    height: 120,
                                                    objectFit: "cover",
                                                    borderRadius: 8,
                                                }}
                                            />
                                        )
                                    )}
                                </div>
                            </div>

                            {/* Details Images Section */}
                            <div className="form-group mb-3">
                                <label>Details Images</label>

                                <input
                                    type="file"
                                    id="details_images"
                                    name="details_images"
                                    accept=".jpg,.jpeg,.png,.svg"
                                    multiple
                                    onChange={handleDetailsImagesChange}
                                    className={`form-control ${
                                        errors.details_images
                                            ? "is-invalid"
                                            : ""
                                    }`}
                                />
                                {errors.details_images && (
                                    <div className="invalid-feedback d-block">
                                        {errors.details_images}
                                    </div>
                                )}
                                <div className="d-flex flex-wrap gap-2 mb-2 mt-3">
                                    {/* Show existing images */}
                                    {existingDetailsImages.map((img) => (
                                        <div key={img.id} style={{ position: "relative" }}>
                                            <img
                                                src={`${baseUrl}/storage/app/public/${img.image_url}`}
                                                alt=""
                                                style={{
                                                    width: 80,
                                                    height: 80,
                                                    objectFit: "cover",
                                                    borderRadius: 8,
                                                }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleDeleteExistingImage(img.id)}
                                                style={{
                                                    position: "absolute",
                                                    top: 2,
                                                    right: 2,
                                                    background: "rgba(255,0,0,0.7)",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "50%",
                                                    width: 24,
                                                    height: 24,
                                                    cursor: "pointer",
                                                }}
                                                title="Delete"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                    {/* Show new images preview with close button */}
                                    {detailsImagePreviews.map((src, idx) => (
                                        <div key={"new-" + idx} style={{ position: "relative" }}>
                                            <img
                                                src={src}
                                                alt={`Details Preview ${idx + 1}`}
                                                style={{ width: 80, height: 80, objectFit: "cover", borderRadius: 8 }}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveNewImage(idx)}
                                                style={{
                                                    position: "absolute",
                                                    top: 2,
                                                    right: 2,
                                                    background: "rgba(255,0,0,0.7)",
                                                    color: "white",
                                                    border: "none",
                                                    borderRadius: "50%",
                                                    width: 24,
                                                    height: 24,
                                                    cursor: "pointer",
                                                }}
                                                title="Remove"
                                            >×</button>
                                        </div>
                                    ))}
                                </div>
                                {detailsImageError && (
                                    <div className="text-danger mt-2">{detailsImageError}</div>
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
                                    disabled={processing || !canSubmit}
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

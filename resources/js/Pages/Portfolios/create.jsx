import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Create({ portfolio_types }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        sort_order: "",
        status: "active",
        portfolio_type_id: "",
        short_description: "",
        client_name: "",
        project_url: "",
        description: "",
        image_url: null,
        details_images: [], // new field for multiple images
    });

    const [detailsImagePreviews, setDetailsImagePreviews] = React.useState([]);
    const [projectImagePreview, setProjectImagePreview] = React.useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("portfolios.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                    Create Portfolio
                </h2>
            }
        >
            <Head title="Create Portfolio" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={submit} noValidate>
                                <div className="form-group mb-3">
                                    <label htmlFor="title">
                                        Title{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.title ? "is-invalid" : ""
                                        }`}
                                        id="title"
                                        name="title"
                                        placeholder="Enter title"
                                        value={data.title}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.title && (
                                        <div className="invalid-feedback">
                                            {errors.title}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="sort_order">
                                        Sort Order
                                    </label>
                                    <input
                                        type="number"
                                        className={`form-control ${
                                            errors.sort_order
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="sort_order"
                                        name="sort_order"
                                        placeholder="Enter sort order"
                                        value={data.sort_order}
                                        onChange={handleChange}
                                    />
                                    {errors.sort_order && (
                                        <div className="invalid-feedback">
                                            {errors.sort_order}
                                        </div>
                                    )}
                                </div>

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

                                <div className="form-group mb-3">
                                    <label htmlFor="client_name">
                                        Client Name
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.client_name
                                                ? "is-invalid"
                                                : ""
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

                                <div className="form-group mb-3">
                                    <label htmlFor="project_url">
                                        Project URL
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.project_url
                                                ? "is-invalid"
                                                : ""
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
                                            errors.description
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                    />
                                    {errors.description && (
                                        <div className="invalid-feedback d-block">
                                            {errors.description}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="image_url" className="form-label">
                                        Project Image <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="file"
                                        id="image_url"
                                        name="image_url"
                                        accept=".jpg,.jpeg,.png,.svg"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            setData("image_url", file);
                                            setProjectImagePreview(file ? URL.createObjectURL(file) : null);
                                        }}
                                        className={`form-control ${
                                            errors.image_url ? "is-invalid" : ""
                                        }`}
                                    />
                                    {errors.image_url && (
                                        <div className="invalid-feedback d-block">
                                            {errors.image_url}
                                        </div>
                                    )}
                                    {/* Preview selected project image */}
                                    {projectImagePreview && (
                                        <div className="mt-2">
                                            <img src={projectImagePreview} alt="Project Preview" style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 8 }} />
                                        </div>
                                    )}
                                </div>

                                {/* Multi-image upload for details images */}
                                <div className="form-group mb-3">
                                    <label htmlFor="details_images" className="form-label">
                                        Details Images
                                    </label>
                                    <input
                                        type="file"
                                        id="details_images"
                                        name="details_images"
                                        accept=".jpg,.jpeg,.png,.svg"
                                        multiple
                                        onChange={(e) => {
                                            const files = Array.from(e.target.files);
                                            setData("details_images", files);
                                            // Preview
                                            setDetailsImagePreviews(files.map(file => URL.createObjectURL(file)));
                                        }}
                                        className={`form-control ${errors.details_images ? "is-invalid" : ""}`}
                                    />
                                    {errors.details_images && (
                                        <div className="invalid-feedback d-block">
                                            {errors.details_images}
                                        </div>
                                    )}
                                    {/* Preview selected images */}
                                    {detailsImagePreviews.length > 0 && (
                                        <div className="mt-2 d-flex flex-wrap gap-2">
                                            {detailsImagePreviews.map((src, idx) => (
                                                <img key={idx} src={src} alt={`Details Preview ${idx + 1}`} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="status">Status</label>
                                    <select
                                        className={`form-control ${
                                            errors.status ? "is-invalid" : ""
                                        }`}
                                        id="status"
                                        name="status"
                                        value={data.status}
                                        onChange={handleChange}
                                    >
                                        <option value="active">Active</option>
                                        <option value="inactive">
                                            Inactive
                                        </option>
                                    </select>
                                    {errors.status && (
                                        <div className="invalid-feedback">
                                            {errors.status}
                                        </div>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={processing}
                                >
                                    {processing ? "Saving..." : "Save"}
                                </button>

                                <Link
                                    href={route("portfolios.index")}
                                    className="btn btn-secondary ms-2"
                                >
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

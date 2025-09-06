import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        designation: "",
        duration: "",
        company_name: "",
        company_address: "",
        work_description: "",
        sort_order: "",
        status: "active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("experiences.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                    Create Experience
                </h2>
            }
        >
            <Head title="Create Experience" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8">
                            <form onSubmit={submit} noValidate>
                                <div className="form-group mb-3">
                                    <label htmlFor="designation">
                                        Designation{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.designation
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="designation"
                                        name="designation"
                                        placeholder="Enter designation"
                                        value={data.designation}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.designation && (
                                        <div className="invalid-feedback">
                                            {errors.designation}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="duration">
                                        Duration{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.duration ? "is-invalid" : ""
                                        }`}
                                        id="duration"
                                        name="duration"
                                        placeholder="e.g., Jan 2021 - Dec 2023"
                                        value={data.duration}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.duration && (
                                        <div className="invalid-feedback">
                                            {errors.duration}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="company_name">
                                        Company Name{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.company_name
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="company_name"
                                        name="company_name"
                                        placeholder="Enter company name"
                                        value={data.company_name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.company_name && (
                                        <div className="invalid-feedback">
                                            {errors.company_name}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="company_address">
                                        Company Address{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className={`form-control ${
                                            errors.company_address
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                        id="company_address"
                                        name="company_address"
                                        placeholder="Enter company address"
                                        value={data.company_address}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.company_address && (
                                        <div className="invalid-feedback">
                                            {errors.company_address}
                                        </div>
                                    )}
                                </div>

                                <div className="form-group mb-3">
                                    <label htmlFor="work_description">
                                        Work Description{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <ReactQuill
                                        theme="snow"
                                        value={data.work_description}
                                        onChange={(content) =>
                                            setData("work_description", content)
                                        }
                                        className={`${
                                            errors.work_description
                                                ? "is-invalid"
                                                : ""
                                        }`}
                                    />
                                    {errors.work_description && (
                                        <div className="invalid-feedback d-block">
                                            {errors.work_description}
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
                                    href={route("experiences.index")}
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

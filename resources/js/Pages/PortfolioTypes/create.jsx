import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, Link } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        sort_order: "",
        status: "active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("portfolio-types.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="mb-4 text-xl font-semibold text-gray-800">
                    Create Portfolio Type
                </h2>
            }
        >
            <Head title="Create Portfolio Type" />

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
                                    href={route("portfolio-types.index")}
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

import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import TaskTable from '../Task/TaskTable';
const Show = ({ project, auth, tasks, queryParams }) => {
    // Function to determine the status style with background and border
    const getStatusStyle = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-100 text-green-800 border border-green-400';
            case 'in_progress':
                return 'bg-blue-100 text-blue-800 border border-blue-400';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800 border border-yellow-400';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border border-red-400';
            default:
                return 'bg-gray-100 text-gray-800 border border-gray-400';
        }
    }

    return (
        <Authenticated user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-900 dark:text-gray-700 leading-tight">
                    {`Project "${project.name}"`}
                </h2>
            }>
            <Head title="Project Details" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <img
                                src={project.image_path}
                                alt=""
                                className="w-full h-64 object-cover bg-slate-500 rounded-md"
                            />
                        </div>
                        <div className="p-6 bg-white border-t border-gray-200">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Left column: Project details */}
                                <div>
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <label className="font-semibold text-lg">Project ID</label>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.id}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <label className="font-semibold text-lg">Project Name</label>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <label className="font-semibold text-lg">Created By</label>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.createdBy.name}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <label className="font-semibold text-lg">Project Status</label>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    <span className={`px-2 py-1 inline-flex text-xs font-semibold uppercase rounded-full ${getStatusStyle(project.status)}`}>
                                                        {project.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Right column: Dates */}
                                <div className="flex flex-col justify-center">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <label className="font-semibold text-lg">Created At</label>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.created_at}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <label className="font-semibold text-lg">Due Date</label>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.due_date}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    <label className="font-semibold text-lg">Updated By</label>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.updatedBy ? project.updatedBy.name : 'Not Updated'}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Project Description */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-900">Project Description</h3>
                                <p className="mt-2 text-gray-600">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <TaskTable tasks={tasks} queryParams={queryParams} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}

export default Show;

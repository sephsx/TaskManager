import React from 'react';
import { router, Link, Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';
import TextInput from '@/Components/TextInput';
import SelectInput from '@/Components/SelectInput';
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const Index = ({ auth, projects, queryParams = null }) => {
    queryParams = queryParams || {}
    const projectList = projects.data;

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case 'completed':
                return 'bg-green-100 text-green-800';
            case 'in_progress':
                return 'bg-blue-100 text-blue-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    // setvalue function filtered
    const searchFieldChange = (name, value) => {
        if (value) {
            queryParams[name] = value
        } else {
            delete queryParams[name]
        }
        router.get(route('project.index'), queryParams)
    }

    // onKeyPress function filtered
    const onKeyPress = (name, e) => {
        if (e !== 'Enter')
            return
        searchFieldChange(name, e.target.value)
    }

    //sortChange
    const sortChange = (name) => {
        if (name === queryParams.sort_field) {
            if (queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc'
            } else {
                queryParams.sort_direction = 'asc'
            }
        }else{
            queryParams.sort_field = name
            queryParams.sort_direction = 'asc'
        }
        router.get(route("project.index"), queryParams)
    }
    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Projects</h2>}
        >
            <Head title="Projects" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th onClick={(e) => sortChange('id')}>
                                                <div className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-between gap-1 cursor-pointer'>
                                                    ID
                                                    <div>
                                                        <ChevronUpIcon
                                                            className={`w-4${queryParams.sort_field === 'id' && queryParams.sort_direction === 'asc' ? ' text-red-600' : ''}`}
                                                        />
                                                        <ChevronDownIcon
                                                        className={`w-4 -mt-2${queryParams.sort_field === 'id' && queryParams.sort_direction === 'desc' ? ' text-red-600' : ''}`}
                                                        />
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={sortChange} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Image
                                            </th>
                                            <th onClick={(e) => sortChange('name')}>
                                                <div className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-between gap-1 cursor-pointer'>
                                                    Name
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4 -mt-2" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={(e) => sortChange('status')} >
                                                <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-between gap-1 cursor-pointer">
                                                    Status
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4 -mt-2" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={(e) => sortChange('created_at')} >
                                                <div className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-between gap-1 cursor-pointer">
                                                    Create Date
                                                    <div>
                                                        <ChevronUpIcon className="w-4" />
                                                        <ChevronDownIcon className="w-4 -mt-2" />
                                                    </div>
                                                </div>
                                            </th>
                                            <th onClick={(e) => sortChange('due_date')} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-between gap-1 cursor-pointer">
                                                Due Date
                                                <div>
                                                    <ChevronUpIcon className="w-4" />
                                                    <ChevronDownIcon className="w-4 -mt-2" />
                                                </div>
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Created By
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>

                                    </thead>
                                    <thead className="bg-gray-50">
                                        <tr className='text-wrap'>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                ID
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <TextInput defaultValue={queryParams.name} className="w-full" placeholder="Search Name" onBlur={e => searchFieldChange('name', e.target.value)} onKeyPress={e => onKeyPress('name', e.target.value)} />
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                <SelectInput defaultValue={queryParams.status}
                                                    className="w-auto min-w-[150px] text-center" // Added min-w-[150px] and w-auto
                                                    placeholder="Select Status"
                                                    onBlur={(e) => searchFieldChange('status', e.target.value)}
                                                    onKeyPress={(e) => onKeyPress('status', e.target.value)}
                                                >
                                                    <option value="">All</option>
                                                    <option value="completed">Completed</option>
                                                    <option value="in_progress">In Progress</option>
                                                    <option value="pending">Pending</option>
                                                    <option value="cancelled">Cancelled</option>
                                                </SelectInput>
                                            </th>


                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {projectList.map((project) => (
                                            <tr key={project.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.id}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <img src={project.image_path} alt={project.name} className="w-10 h-10 rounded-full" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {project.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(project.status)}`}>
                                                        {project.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.created_at}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {project.due_date}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                    {project.createdBy.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    <div className="flex space-x-2">
                                                        <Link href={route('project.edit', project.id)} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                                                        <Link href={route('project.destroy', project.id)} className="text-red-600 hover:text-red-900">Delete</Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination className="mt-6" links={projects.meta.links} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
};

export default Index;

import React from 'react';
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import TaskTable from '../Task/TaskTable';

const Index = ({ auth, tasks, queryParams = null }) => {


    return (
        <Authenticated
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">tasks</h2>

            }
        >
            <Head title="tasks" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <TaskTable tasks={tasks} queryParams={queryParams}/>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated >
    );
};

export default Index;

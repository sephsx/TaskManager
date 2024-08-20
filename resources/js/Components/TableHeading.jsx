import React from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

const TableHeading = ({
  sort_field = null, 
  sort_direction = null, 
  children, 
  name, 
  sortable = true,
  sortChanged = () => {}}
) => {
  return (
    <th onClick={() => sortChanged(name)}>
      <div className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center justify-between gap-1 cursor-pointer'>
        {children}
        {sortable && (
          <div>
            <ChevronUpIcon
              className={`w-4${sort_field === name && sort_direction === 'asc' ? ' text-red-600' : ''}`}
            />
            <ChevronDownIcon
              className={`w-4 -mt-2${sort_field === name && sort_direction === 'desc' ? ' text-red-600' : ''}`}
            />
          </div>
        )}
      </div>
    </th>
  )
}

export default TableHeading




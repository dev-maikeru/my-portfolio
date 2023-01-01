import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function Modal(props) {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
      <>
        <button onClick={openModal} className='px-5 py-2 bg-[#21252B] shadow shadow-[#181a1f] hover:bg-[#1a1d22] hover:border hover:border-[#4928db] rounded-md w-full'>Demo</button>
        {props.type === 'Capstone Project' ? 
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
              <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>
      
              <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                  >
                  <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title
                      as="h3"
                      className="text-lg text-center font-medium leading-6 text-gray-900"
                      >
                      Visit
                      </Dialog.Title>
                    
                      <div className="mt-4 flex justify-center items-center gap-4">
                        <div className='flex-1'>
                          <a href="https://scholarshipportalmalolos.infinityfreeapp.com" target='_blank' rel='noreferrer'>
                            <button
                                type="button"
                                className="w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                            >
                                Applicant Portal
                            </button>
                          </a>
                        </div>
                        <div className='flex-1'>
                          <a href="https://scholarshipportalmalolos.infinityfreeapp.com/admin-login.php" target='_blank' rel='noreferrer'>
                            <button
                                type="button"
                                className="w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}
                            >
                                Admin Side
                            </button>
                          </a>
                        </div>
                      </div>
                  </Dialog.Panel>
                  </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      : ''}
    </>
    )
  }

export default Modal
let modalData = $state({
    isOpen: false,
    title: '',
    content: '',
    onConfirm: null,
    onCancel: null,
});

export function getModalData() {
    return modalData;
}

/** 
 * @param {string} title - The title of the modal
 * @param {string} content - The content of the modal
 * @param {function} onConfirm - Callback function for confirm button
 * @param {function} onCancel - Callback function for cancel button
 * @returns void
 */

export function showModal(title, content, onConfirm, onCancel) {
    modalData.isOpen = true;
    modalData.title = title;
    modalData.content = content;
    modalData.onConfirm = onConfirm;
    modalData.onCancel = onCancel;
}

export function closeModal() {
    modalData.isOpen = false;
    modalData.title = '';
    modalData.content = '';
    modalData.onConfirm = null;
    modalData.onCancel = null;
}
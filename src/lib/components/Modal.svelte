<script>
    import { getModalData, closeModal } from "$lib/utils/modal.svelte";
    import { Modal } from "@sveltestrap/sveltestrap";

    let modalData = getModalData();
</script>

<div class="modal" class:open={modalData.isOpen}>
  <div class="modal-content">
    <div class="modal-header">
        <button type="button" class="close-button" onclick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
              </svg>
        </button>
    </div>
    
    <div class="modal-body">
        <!-- <slot /> -->
        {@html modalData.content }
    </div>

    <div class="modal-footer"></div>
  </div>
</div>

<style>
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        display: none;
    }
    .modal.open {
        display: flex;
        animation: fade 0.2s ease-out;
    }

    @keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        position: relative;
        max-width: 500px;
        width: 100%;
        animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    @keyframes zoom {
		from {
			transform: scale(0.85);
		}
		to {
			transform: scale(1);
		}
	}

    .close-button {
        margin: 0 0 0 auto;
        background: transparent;
        border: none;
        outline: none;
        width: 32px;
        height: 32px;
    }
</style>
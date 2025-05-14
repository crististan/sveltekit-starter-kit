<script>
    import { Icon } from '@sveltestrap/sveltestrap';
    import { getToasts, dismissToast } from '$lib/utils/toast.svelte.js';
    import { fly } from 'svelte/transition';

    let toasts = getToasts();
</script>

{#if toasts.length > 0}
    <div class="toast-container">
        {#each toasts as toast}
            <div 
                class="toast toast-{toast.type}" 
                transition:fly={{ x: 20, duration: 200 }}
            >
                <div class="toast-content">
                    {toast.message}
                </div>
                <button type="button" class="toast-close" onclick={() => {
                    dismissToast(toast.id);
                }}>
                    <Icon name="x" />
                </button>
            </div>
        {/each}
    </div>
{/if}

<style>
.toast-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: 10px;
    pointer-events: none;
}

.toast {
    min-width: 250px;
    max-width: 350px;
    padding: 14px 16px;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-between;
    align-items: center;
    pointer-events: auto;
    cursor: pointer;
}

.toast-content {
    flex: 1;
    margin-right: 10px;
    word-break: break-word;
}

.toast-info {
    background-color: #2196F3;
    color: white;
}

.toast-success {
    background-color: #4CAF50;
    color: white;
}

.toast-error {
    background-color: #F44336;
    color: white;
}

.toast-warning {
    background-color: #FF9800;
    color: white;
}

.toast-close {
    background: transparent;
    border: none;
    color: inherit;
    font-size: 20px;
    cursor: pointer;
    padding: 0 8px;
    margin-left: auto;
}
</style>
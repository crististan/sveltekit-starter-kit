<script>
    import { 
        Card,
        CardHeader,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText,
        Button,
        CardFooter,
    } from '@sveltestrap/sveltestrap';

    let {
        cardTitle,
        cardImage,
        cardSubtitle,
        cardDescription,
        cardButton,
        cardFooter
    } = $props();
</script>

<Card>
    {#if cardTitle}
        <CardHeader>
            <CardTitle>{ cardTitle }</CardTitle>
        </CardHeader>
    {/if}
    <CardBody>
        {#if cardImage}
            <img class="mb-3" src={cardImage.src} alt={cardImage.alt} />
        {/if}
        {#if cardSubtitle}
            <CardSubtitle>{ cardSubtitle }</CardSubtitle>
        {/if}
        {#if cardDescription}
            <CardText>{ cardDescription }</CardText>
        {/if}
        {#if cardButton}
            <Button 
                color="primary" 
                outline
                on:click={cardButton.onClick}
            >
                { cardButton.label }
            </Button>
        {/if}
    </CardBody>
    {#if cardFooter}
        <CardFooter>{ cardFooter }</CardFooter>
    {/if}
</Card>
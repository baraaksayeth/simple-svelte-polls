<script>
    export let type = "button";
    export let inverse = false;
    export let secondary = false;
    export let primary = false;
</script>

<button type={type} class:inverse={inverse} class:primary={primary} on:click class:secondary={secondary}  >
    <slot />
</button>

<style>
    button{
        width: 5rem;
        background: white;
        padding: 5px;
        cursor: pointer;
    }
    .primary{
        background: orangered;
        color:white;
        border-color: white;
    }
    .primary.inverse{
        border-color: orangered;
        color:orangered;
        background: white;
    }
    .primary.inverse:hover, .primary.inverse:focus{
        background: orangered;
        color:white;
        border-color: white;
    }
    .secondary{
        background: rgb(21, 219, 71);
        color: white;
        border-color: white
    }
    .secondary.inverse{
        border: 1px solid rgb(21, 219, 71);
        color: rgb(21, 219, 71);
        background: white;
    }
    .secondary.inverse:hover, .secondary.inverse:focus{
        background: rgb(21, 219, 71);
        color:white;
        border-color: white;
    }
</style>


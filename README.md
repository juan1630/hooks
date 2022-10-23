# Compilado de diversas aplicaciones, para entender los hooks y Redux

# Hooks

### UseState 
    - El hook mas usado en react, ayuda a modificar el estado local del componente
### UseEffect
    - Es similar al ngOnInit de angular, se ocupa para rendizar y estar a la escucha del cambio de un dato que se paso por segudno parametro.
### UseMemo
    - use memo se encarga de memorizar valores
### UseLayoutEffect
### Use Callback
    - use callback se encarga de memorizar funciones 


## Reducers 

## ¿Qué es un reducer ?
    - Es una fucnión pura que tiene acceso al estado global de la aplicación
    - Pero siempre se encarga de retornar un estado

## UseContext 
    - El use Context ayuda a tener una mejor administracion del estado y a tener un acceso más directo al mismo

# Redux
    - Es un patron que ayuda a manejar el estado global de la aplicacion, todos los componentes pueden acceder al estado global de la aplicacion.

## Cuando usar Redux?
    - Redux se puede iniciar a implementar cuando la aplicacion comienza a crecer y se quiere poder manajar de forma, mas facil el estado de la aplicacion.

## Los tres conceptos basicos de Redux.
    1. Unica fuente de la verdad.
    2. El estado solo lectura.
    3. Los cambios solo se hacen con fucniones puras.

## Componentes basicos de Redux, son:
    1- Store (Objecto en donde se guarda el estado de la aplicacion).
    2- Provider, se debe de declarar en el punto mas alto de la aplicacion, para que todos los componentes tenga el acceso al store.
    3- Reducers, se encargan de modificar el estado.
    4- Las acciones nos ayudan a tener una comunicacion por medio del envio de datos asi el store.

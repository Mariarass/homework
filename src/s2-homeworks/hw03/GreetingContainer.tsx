import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (value:string)=>void, setName: (value:string)=>void, addUserCallback: (value:string)=>void) => {

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут

    if (name.trim().length != 0) {
        addUserCallback(name)
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: string, setError: (value:string)=>void) => {
    name.trim().length === 0 && setError('Ошибка! Введите имя!')// если имя пустое - показать ошибку
}

export const pureOnEnter = (e: string, addUser: ()=>void) => { // если нажата кнопка Enter - добавить
    if (e === "Enter") {

        addUser()
    }

}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string >('')

    const setNameCallback = (e: string) => {
        setName(e)
        lastUserName=''
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: string) => {

        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix

    let lastUserName = users.length!=0?users[users.length - 1].name:''



    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('Enter your name')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let withoutSpace = e.currentTarget.value.trim()
        if (withoutSpace){
            setName(withoutSpace)
            error && setError("Name is correct!")
        }
        else {
            name && setError("Name is require!")
            setName("")
        }
    }
    const addUser = () => {
        addUserCallback(name)
        alert(`Hello ${name}!`)
        setName('')
        setError('Enter your name')
    }

    const totalUsers = users.length

    const onEnter = (e: KeyboardEvent<HTMLInputElement>)=> {
        if (e.key === 'Enter' && name){
            addUser()
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
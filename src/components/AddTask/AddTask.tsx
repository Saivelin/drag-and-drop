"use client"

import { useEffect, useRef, useState } from "react";
import styles from "./AddTask.module.scss"
import { Editor } from '@tinymce/tinymce-react'
import { useCreateTaskMutation } from "@/redux/services/taskApi";
import Button from "../Button/Button";
import { StatusEnum } from "@/types/Tasks";
import Input from "../Input/Input";
import MultiSelect from "../MultiSelect/MultiSelect";
import { useGetAllUsersQuery } from "@/redux/services/userApi";

let editor_content_style = `
`

const AddTask = ({refetch} : {refetch: any}) => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")
    const [executors, setExecutors] = useState<number[]>([])

    const {data: users, refetch: userRefetch} = useGetAllUsersQuery()
    const [submitForm] = useCreateTaskMutation()

    const handleDescription = () => {
        setDescription(editorRef ? editorRef.current.getContent() : '')
    }

    const editorRef = useRef<any>()

    const handleSubmit = () => {
        const data = {
            title: title,
            description: description,
            deadline: deadline,
            creator: 1,
            executors: executors,
            status: StatusEnum.Created
        }
        submitForm(data).then((res: any)=>{refetch(); console.log(res)})
    }

    return (
        <div className={styles.container}>
            <form action="" className={`${styles.form}`}>
                <Input type="text" props={{placeholder: "Название", value: title}} onChange={(e)=>{setTitle(e.target.value)}} classNames={[styles.input]}/>
                <div className={styles.editorContainer}>
                    <Editor
                        apiKey='ypdfy814gbbhychpogzy2ob4hyjaorrrj8qfqte2kw7emk8d'
                        onInit={(evt, editor) => (editorRef.current ? (editorRef.current = editor) : null)}
                        onChange={handleDescription}
                        textareaName='description'
                        ref={editorRef}
                        // onInit={(evt, editor) => (editorRef.current ? editorRef.current = editor : null)}
                        initialValue={description}
                        init={{
                            extended_valid_elements : "svg[*]",
                            max_height: 500,
                            max_width: 1000,
                            plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                            content_style: editor_content_style,
                            menubar: 'file edit view insert format tools table help',
                            toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                            contextmenu: 'link image imagetools table',
                            quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                            toolbar_sticky: true,
                            noneditable_noneditable_class: 'mceNonEditable',
                            toolbar_mode: 'sliding',
                        }}
                    />
                </div>
                <Input type="date" props={{placeholder: "Deadline", value: deadline}}  onChange={(e)=>{setDeadline(e.target.value)}} classNames={[styles.input]}/>
                {
                    users && users.length > 0 ?
                        <MultiSelect
                            setter={setExecutors}
                            options={[...users?.map((user)=>{
                                return {value: user.id.toString(), label: user.name}
                            })]}
                            props={{placeholder: "Исполнители"}}

                        />
                    : null
                }
                <Button onClick={handleSubmit} stylesProp={{maxWidth: 200, minWidth: 100, marginLeft: "auto", marginRight: "auto"}} props={{type: "button"}}>
                    Создать
                </Button>
            </form>
        </div>
    );
};

export default AddTask;
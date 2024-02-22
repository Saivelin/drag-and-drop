"use client"

import { useRef, useState } from "react";
import styles from "./AddTask.module.scss"
import { Editor } from '@tinymce/tinymce-react'
import { useCreateTaskMutation } from "@/redux/services/taskApi";
import Button from "../Button/Button";
import { StatusEnum } from "@/types/Tasks";

let editor_content_style = `
`

const AddTask = ({refetch} : {refetch: any}) => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [deadline, setDeadline] = useState<string>("")

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
            executors: [1],
            status: StatusEnum.Created
        }
        submitForm(data).then(()=>{refetch()})
    }

    return (
        <div className={styles.container}>
            <input type="text" placeholder="Название" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
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
            <input type="date" placeholder="Deadline" value={deadline} onChange={(e)=>{setDeadline(e.target.value)}}/>
            <Button onClick={handleSubmit}>
                Создать
            </Button>
        </div>
    );
};

export default AddTask;
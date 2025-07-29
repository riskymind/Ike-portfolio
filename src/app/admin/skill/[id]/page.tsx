import SkillForm from "@/components/admin/SkillForm";
import { Metadata } from "next";
import {getSkillById} from "@/lib/actions/skill.actions"
import React from 'react'
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "Update Skill"
}




const UpdateSkillPage = async (props: {
    params: Promise<{id: string}>
}) => {
    const { id } = await props.params
    const skill = await getSkillById(id)

    if(!skill) return notFound()

  return (
    <div className='container'>
        <h2 className='text-3xl font-bold'>Update Skill</h2>
        <div className='my-8'>
            <SkillForm type='Update' skill={skill} skillId={skill.id}/>
        </div>
    </div>
  )
}

export default UpdateSkillPage

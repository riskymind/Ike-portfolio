"use client"
import { UploadButton } from '@/lib/uploadthing';
import {Skill} from  "@/types/index"
import { useRouter } from 'next/navigation';
import {insertSkillSchema, updateSkillSchema} from "@/lib/validators"
import {z} from "zod"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {skillDefaultValues} from "@/lib/constants/index"
import {toast} from "sonner"
import {createSkill, updateSkill} from "@/lib/actions/skill.actions"


const SkillForm = ({
    type,
    skill,
    skillId
}: {
    type: "Create" | "Update"
    skill?: Skill
    skillId?: string
}) => {

const router = useRouter()

const schema = type === 'Update' ? updateSkillSchema : insertSkillSchema;
type SkillFormSchema = z.infer<typeof schema>;

const form = useForm<SkillFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: skill && type === 'Update' ? skill : skillDefaultValues,
  });


 const onSubmit = async (values: SkillFormSchema) => {
    if (type === 'Create') {
      const res = await createSkill(values);
      if (!res.success) return toast.error(res.message);
      toast.success(res.message);
      router.push('/admin/skill');
    }

    if (type === 'Update') {
      if (!skillId) return router.push('/admin/skill');
      const res = await updateSkill({ ...values, id: skillId });
      if (!res.success) return toast.error(res.message);
      toast.success(res.message);
      router.push('/admin/skill');
    }
  };

   const { register, handleSubmit, formState: { isSubmitting, errors } } = form;


  return (
    <form className='flex flex-col gap-8' method='POST' onSubmit={handleSubmit(onSubmit)}>
        
        <div className='flex flex-col'>
            <label htmlFor="title" className='block font-medium mb-1'>Title</label>
            <input type="text" placeholder='Enter Skill Name' 
            className='w-full border px-3 py-2 rounded' id='title' {...register("title")}/>
            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
        </div>


    <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-6 py-2 rounded disabled:opacity-50">
        {isSubmitting ? 'Submitting...' : `${type} Skill`}
      </button>
    </form>
  )
}

export default SkillForm

import { useState, useCallback } from "react"
import api from "@/api/axios"   

type UploadResult = {
  url: string
  publicId?: string
}

export function useImageUpload() {
  const [progress, setProgress] = useState<number>(0)
  const [isUploading, setIsUploading] = useState<boolean>(false)

  const uploadImage = useCallback(
    async (file: File, signal?: AbortSignal): Promise<UploadResult> => {
      const form = new FormData()
      form.append("image", file)

      try {
        setIsUploading(true)
        setProgress(0)

        const response = await api.post(
          "uploads/image",
          form,
          {
            signal,
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (e) => {
              if (e.total) {
                const p = Math.round((e.loaded * 100) / e.total)
                setProgress(p)
              }
            },
          }
        )

        return response.data
      } catch (err: any) {
        const msg =
          err?.response?.data?.message ||
          err?.message ||
          "Upload failed"
        throw new Error(msg)
      } finally {
        setIsUploading(false)
      }
    },
    []
  )

  return {
    uploadImage,
    progress,
    isUploading,
  }
}

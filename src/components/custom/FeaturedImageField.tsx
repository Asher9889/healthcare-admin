// src/components/FeaturedImageField.tsx
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useImageUpload } from "@/hooks";

type Props = {
  register: any;
  setValue: any;
  error?: { message?: string };
  watch?: any;
  disabled?: boolean;
};

export default function FeaturedImageField({
  register,
  setValue,
  error,
  watch,
  disabled = false,
}: Props) {
  const { uploadImage, progress, isUploading } = useImageUpload();

  // unified preview
  const [preview, setPreview] = useState<string>("");

  const featuredImage = watch("featuredImage");
  useEffect(() => {
    setPreview(featuredImage);
  }, [featuredImage]);

  // FILE → upload → set URL
  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const { url } = await uploadImage(file);
      setValue("featuredImage", url, { shouldValidate: true });
      setValue("featuredImageFile", undefined);
      setPreview(url);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  // URL → update preview
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setValue("featuredImage", url, { shouldValidate: true });
    setValue("featuredImageFile", undefined);
    setPreview(url);
  };

  // Unified remove
  const clearImage = () => {
    setPreview("");
    setValue("featuredImage", "");
    setValue("featuredImageFile", undefined);
  };

  return (
    <div className="space-y-2">
      <Label>Featured Image</Label>

      {/* File Upload */}
      <Input
        type="file"
        accept="image/*"
        {...register("featuredImageFile")}
        onChange={handleFileSelect}
        disabled={disabled}
      />

      {isUploading && (
        <p className="text-sm text-muted-foreground">Uploading… {progress}%</p>
      )}

      <div className="text-center text-muted-foreground text-sm">OR</div>

      {/* URL Input */}
      <Input
        placeholder="https://example.com/image.jpg"
        {...register("featuredImage")}
        onChange={handleUrlChange}
        disabled={disabled}
      />

      {error?.message && (
        <p className="text-red-500 text-sm">{error.message}</p>
      )}

      {/* Preview */}
      {preview && (
        <div className="mt-3">
          <img
            src={preview}
            className="h-40 w-auto rounded border object-cover"
          />

          <Button
            size="sm"
            variant="ghost"
            className="mt-2 text-xs"
            onClick={clearImage}
            disabled={disabled}
          >
            Remove
          </Button>
        </div>
      )}
    </div>
  );
}

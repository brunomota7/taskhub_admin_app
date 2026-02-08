"use client";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Eye, EyeOff } from "lucide-react"; 

type InputProps = {
  label?: string;
  type?: "text" | "password" | "email" | "number";
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoCorrect?: boolean;
  editable?: boolean;
  style?: string;
  onToggleSecureEntry?: () => void;
};

export default function Input({
  label,  
  type = "text",
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCapitalize,
  autoCorrect,
  editable = true,
  style,
  onToggleSecureEntry,
}: InputProps) {
  const textColor = useThemeColor({}, "text");
  const iconColor = useThemeColor({}, "icon");
  const backgroundColor = useThemeColor({}, "background");
  const borderColor = useThemeColor({}, "tint");

  return (
    <div className="mb-4 w-full">
      {label && (
        <label
          className="mb-1 block text-sm font-medium"
          style={{ color: textColor }}
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center rounded-md border px-3`}
        style={{ borderColor, backgroundColor }}
      >
        <input
          type={secureTextEntry ? "password" : type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChangeText(e.target.value)}
          disabled={!editable}
          className={`flex-1 py-2 text-base outline-none bg-transparent ${style}`}
          style={{ color: textColor }}
          autoCorrect={autoCorrect ? "on" : "off"}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={onToggleSecureEntry}
            className="ml-2 flex h-10 w-10 items-center justify-center"
          >
            {secureTextEntry ? (
              <EyeOff size={20} color={iconColor} />
            ) : (
              <Eye size={20} color={iconColor} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

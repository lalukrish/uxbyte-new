"use client";

import React from "react";
import {
  FileItem,
  FolderItem,
  FolderTrigger,
  FolderContent,
  Files,
  SubFiles,
} from "@/components/animate-ui/components/radix/files";
import { FileJsonIcon } from "lucide-react";

export const RadixFilesDemo = () => {
  return (
    <div className="relative max-w-[500px] md:h-[500px] md:max-h-[850px]  size-full rounded-2xl border bg-gray-800 overflow-auto">
      <Files className="w-full" defaultOpen={["app", "api"]}>
        {/* APP FOLDER */}
        <FolderItem value="app">
          <FolderTrigger
            gitStatus="modified"
            className="w-full flex items-center justify-between"
          >
            app
          </FolderTrigger>

          <FolderContent>
            <SubFiles defaultOpen={["(home)"]}>
              <FolderItem value="(home)">
                <FolderTrigger gitStatus="untracked">(home)</FolderTrigger>

                <FolderContent>
                  <FileItem gitStatus="untracked">page.tsx</FileItem>
                  <FileItem gitStatus="untracked">layout.tsx</FileItem>
                </FolderContent>
              </FolderItem>

              <FileItem gitStatus="untracked" className="text-white">
                layout.tsx
              </FileItem>
              <FileItem className="text-white" gitStatus="modified">
                page.tsx
              </FileItem>
              <FileItem gitStatus="modified" className="text-white">
                global.css
              </FileItem>
            </SubFiles>
          </FolderContent>
        </FolderItem>

        {/* API FOLDER */}
        <FolderItem value="api">
          <FolderTrigger gitStatus="modified">api</FolderTrigger>

          <FolderContent>
            <SubFiles defaultOpen={["auth"]} className="text-white">
              <FolderItem value="auth">
                <FolderTrigger>auth</FolderTrigger>

                {/* <FolderContent>
                  <FileItem>route.ts</FileItem>
                  <FileItem>middleware.ts</FileItem>
                </FolderContent> */}
              </FolderItem>

              <FolderItem value="users">
                <FolderTrigger>users</FolderTrigger>

                <FolderContent>
                  <FileItem>route.ts</FileItem>
                  <FileItem>[id].ts</FileItem>
                </FolderContent>
              </FolderItem>

              <FileItem>health.ts</FileItem>
            </SubFiles>
          </FolderContent>
        </FolderItem>

        {/* COMPONENTS FOLDER */}
        <FolderItem value="components">
          <FolderTrigger gitStatus="untracked">components</FolderTrigger>

          <FolderContent>
            <SubFiles>
              <FileItem>button.tsx</FileItem>
              <FileItem>tabs.tsx</FileItem>
              <FileItem>dialog.tsx</FileItem>

              <FolderItem value="empty">
                <FolderTrigger>empty</FolderTrigger>
              </FolderItem>
            </SubFiles>
          </FolderContent>
        </FolderItem>

        {/* ROOT FILE */}
        <FileItem gitStatus="untracked" icon={FileJsonIcon}>
          package.json
        </FileItem>
      </Files>
    </div>
  );
};

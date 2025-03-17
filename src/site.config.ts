import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

// 优化：将一些配置信息提取为常量，提高代码可维护性
const SITE_AUTHOR = "仙人掌主题";
const SITE_DESCRIPTION = "仙人掌主题";
const SITE_LANG = "zh-CN";
const SITE_TITLE = "仙人掌主题";

// 网站基本配置
export const siteConfig: SiteConfig = {
    // 网站作者，用于元属性和生成的图片
    author: SITE_AUTHOR,
    // 日期格式化配置，用于 Date.prototype.toLocaleDateString() 方法
    date: {
        locale: SITE_LANG,
        options: {
            day: "numeric",
            month: "narrow",
            year: "numeric",
        },
    },
    // 网站描述，用作默认元描述属性和 Web 清单描述
    description: SITE_DESCRIPTION,
    // HTML 的 lang 属性，指定网站语言
    lang: SITE_LANG,
    // 开放图协议的本地化语言
    ogLocale: SITE_LANG,
    // 网站标题，用于构建元标题属性和 Web 清单名称
    title: SITE_TITLE,
};

// 菜单链接配置
export const menuLinks: { path: string; title: string }[] = [
    {
        path: "/",
        title: "主页",
    },
    {
        path: "/about/",
        title: "关于",
    },
    {
        path: "/posts/",
        title: "博客",
    },
    {
        path: "/notes/",
        title: "笔记",
    },
    // 新增：添加一个“联系我们”的菜单链接
    {
        path: "/contact/",
        title: "联系我们",
    },
];

// 代码高亮插件配置
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
    styleOverrides: {
        borderRadius: "4px",
        codeFontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        codeFontSize: "0.875rem",
        codeLineHeight: "1.7142857rem",
        codePaddingInline: "1rem",
        frames: {
            frameBoxShadowCssValue: "none",
        },
        uiLineHeight: "inherit",
    },
    themeCssSelector(theme, { styleVariants }) {
        // 如果有一个深色主题和一个浅色主题
        // 生成与 cactus - theme 暗黑模式切换兼容的主题 CSS 选择器
        if (styleVariants.length >= 2) {
            const baseTheme = styleVariants[0]?.theme;
            const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
            if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
        }
        // 返回默认选择器
        return `[data-theme="${theme.name}"]`;
    },
    // 选择一个深色主题和一个浅色主题
    themes: ["dracula", "github-light"],
    useThemedScrollbars: false,
    // 新增：添加行号显示功能
    lineNumbers: true,
    // 新增：添加代码复制按钮功能
    codeCopier: {
        position: "top-right", // 复制按钮位置
        showIcon: true, // 显示复制图标
        successDuration: 2000, // 复制成功提示显示时间（毫秒）
    },
};

// 新增：社交链接配置，用于在网站底部显示社交链接
export const socialLinks: { icon: string; url: string }[] = [
    {
        icon: "github",
        url: "https://github.com/your-github-repo",
    },
    {
        icon: "twitter",
        url: "https://twitter.com/your-twitter-account",
    },
    {
        icon: "linkedin",
        url: "https://www.linkedin.com/in/your-linkedin-profile",
    },
];

// 新增：网站页脚信息配置
export const footerConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} ${SITE_AUTHOR}. All rights reserved.`,
    additionalInfo: "Powered by Astro and Cactus Theme",
};

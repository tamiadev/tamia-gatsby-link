import React from 'react';
import { Link as LinkBase, QuotedLink as QuotedLinkBase } from 'tamia';
import { Link as GatbsyLinkBase } from 'gatsby';

/* eslint-disable react/no-multi-comp */

type Props = React.ComponentPropsWithRef<typeof LinkBase> &
	React.ComponentPropsWithRef<typeof GatbsyLinkBase>;

const isExternalLink = (href: string = ''): boolean => {
	const protocol = href && href.split(':').shift();
	return protocol === 'https' || protocol === 'http' || protocol === 'mailto';
};

export const GatsbyLink = LinkBase.withComponent(GatbsyLinkBase);
export const QuotedGatsbyLink = QuotedLinkBase.withComponent(GatbsyLinkBase);

export const Link = React.forwardRef<HTMLAnchorElement, Props>(
	({ href, ...props }: Props, ref) =>
		isExternalLink(href) ? (
			<LinkBase href={href} ref={ref} {...props} />
		) : (
			// @ts-ignore No idea how to fix ref here
			<GatsbyLink to={href} ref={ref} {...props} />
		)
);

export const QuotedLink = React.forwardRef<HTMLAnchorElement, Props>(
	({ href, ...props }: Props, ref) =>
		isExternalLink(href) ? (
			<QuotedLinkBase href={href} ref={ref} {...props} />
		) : (
			// @ts-ignore No idea how to fix ref here
			<QuotedGatsbyLink to={href} ref={ref} {...props} />
		)
);

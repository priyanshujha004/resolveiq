<<<<<<< HEAD
<<<<<<< HEAD
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantService {
  constructor(private prisma: PrismaService) {}

  async getConfig(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: {
        departments: {
          where: { isActive: true },
          select: { id: true, name: true, description: true },
        },
        returnPolicy: {
          select: {
            returnWindowDays: true,
            allowedReasons: true,
            autoApproveBelow: true,
            nonReturnableCategories: true,
          },
        },
      },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    return {
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
      departments: tenant.departments,
      aiPersona: tenant.aiPersona,
      primaryColor: tenant.primaryColor,
      plan: tenant.plan,
      returnPolicy: tenant.returnPolicy,
    };
  }

  async getSettings(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: {
        departments: {
          where: { isActive: true },
          select: { id: true, name: true, description: true, email: true },
        },
        returnPolicy: true,
      },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    // Never return secrets to the frontend
    return {
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
      apiKey: tenant.apiKey,
      primaryColor: tenant.primaryColor,
      logoUrl: tenant.logoUrl,
      aiPersona: tenant.aiPersona,
      aiSystemPrompt: tenant.aiSystemPrompt,
      plan: tenant.plan,
      reportLimit: tenant.reportLimit,
      reportsThisMonth: tenant.reportsThisMonth,
      ownerEmail: tenant.ownerEmail,
      supportEmail: tenant.supportEmail,
      isActive: tenant.isActive,
      shopifyStoreDomain: tenant.shopifyStoreDomain,
      departments: tenant.departments,
      returnPolicy: tenant.returnPolicy,
      createdAt: tenant.createdAt,
      updatedAt: tenant.updatedAt,
    };
=======
// TODO P1: getConfig(tenantId) → { id, name, departments, aiPersona, primaryColor }
import { Injectable } from '@nestjs/common';
=======
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
@Injectable()
export class TenantService {
  constructor(private prisma: PrismaService) {}

  async getConfig(tenantId: string) {
<<<<<<< HEAD
    throw new Error('Not implemented — TODO P1');
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
=======
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: {
        departments: {
          where: { isActive: true },
          select: { id: true, name: true, description: true },
        },
        returnPolicy: {
          select: {
            returnWindowDays: true,
            allowedReasons: true,
            autoApproveBelow: true,
            nonReturnableCategories: true,
          },
        },
      },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    return {
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
      departments: tenant.departments,
      aiPersona: tenant.aiPersona,
      primaryColor: tenant.primaryColor,
      plan: tenant.plan,
      returnPolicy: tenant.returnPolicy,
    };
  }

  async getSettings(tenantId: string) {
    const tenant = await this.prisma.tenant.findUnique({
      where: { id: tenantId },
      include: {
        departments: {
          where: { isActive: true },
          select: { id: true, name: true, description: true, email: true },
        },
        returnPolicy: true,
      },
    });

    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    // Never return secrets to the frontend
    return {
      id: tenant.id,
      name: tenant.name,
      slug: tenant.slug,
      apiKey: tenant.apiKey,
      primaryColor: tenant.primaryColor,
      logoUrl: tenant.logoUrl,
      aiPersona: tenant.aiPersona,
      aiSystemPrompt: tenant.aiSystemPrompt,
      plan: tenant.plan,
      reportLimit: tenant.reportLimit,
      reportsThisMonth: tenant.reportsThisMonth,
      ownerEmail: tenant.ownerEmail,
      supportEmail: tenant.supportEmail,
      isActive: tenant.isActive,
      shopifyStoreDomain: tenant.shopifyStoreDomain,
      departments: tenant.departments,
      returnPolicy: tenant.returnPolicy,
      createdAt: tenant.createdAt,
      updatedAt: tenant.updatedAt,
    };
>>>>>>> 5c84a16f7138b750bcae536206fe50d6b0e034f0
  }
}
